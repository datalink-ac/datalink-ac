/**
 * datalink.ac — Cloudflare Worker
 *
 * Two jobs, one idea:
 *
 *   1. Serve the concept site (static assets).
 *   2. Be the front door to x-cmd.com: every renderer path here is forwarded to
 *      the matching endpoint upstream. datalink.ac/draw?type=pie is x-cmd.com's
 *      renderer, reached under a different name — the address is the only
 *      difference, and there is exactly one implementation of every kind.
 *
 *      /draw, /draw/*      →  www.x-cmd.com/draw, www.x-cmd.com/draw/*
 *      /explore, /explore/*→  www.x-cmd.com/draw/explore, www.x-cmd.com/draw/explore/*
 *      /ppt, /ppt/*        →  po6.sh/ppt          (x-cmd.com/ppt is not deployed yet)
 *      /draw.json          →  the data view: the spec, read out of the render
 *
 * The data view is the one thing done here rather than forwarded: x-cmd.com has
 * no JSON view of a render (see x-cmd/draw#24), so this pulls the render,
 * reads the spec out of the <metadata> the renderer embeds, and hands it back
 * as JSON. When upstream grows one, this can go.
 */

const UPSTREAM = {
  draw: 'https://www.x-cmd.com/draw',
  explore: 'https://www.x-cmd.com/draw/explore',
  // x-cmd.com/ppt is the production address for the deck renderer, but it is
  // not deployed yet — po6.sh runs the same code.
  ppt: 'https://po6.sh/ppt',
};

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, HEAD, OPTIONS',
  'access-control-allow-headers': '*',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    // one canonical host: www folds into the apex
    if (url.hostname === 'www.datalink.ac') {
      url.hostname = 'datalink.ac';
      return Response.redirect(url.toString(), 301);
    }

    // ---- the data view: the spec, as JSON ------------------------------
    if (pathname === '/draw.json' || pathname.startsWith('/draw.json/')) {
      const rest = pathname.replace(/^\/draw\.json/, '') || '';
      const svg = await fetchRender(url, '/draw' + rest);
      if (!svg) return jsonResponse({ error: 'renderer unreachable' }, 502);
      const meta = extractMetadata(svg);
      if (!meta) return jsonResponse({ error: 'no metadata in output' }, 502);
      return jsonResponse(meta, 200);
    }

    // ---- the renderers: forwarded, never re-implemented -----------------
    for (const [prefix, origin] of Object.entries(UPSTREAM)) {
      if (pathname === `/${prefix}` || pathname.startsWith(`/${prefix}/`)) {
        // strip '/prefix' and the slash after it: '', 'arch2', 'a/b' …
        const rest = pathname.slice(prefix.length + 1).replace(/^\//, '');
        return proxy(request, url, origin + (rest ? '/' + rest : ''));
      }
    }

    // ---- older names, kept alive so shared links keep working -----------
    if (pathname === '/d' || pathname === '/d/' || pathname.startsWith('/d/')) {
      url.pathname = '/draw' + pathname.slice(2);
      return Response.redirect(url.toString(), 301);
    }
    if (pathname === '/deck' || pathname === '/deck/' || pathname.startsWith('/deck/')) {
      url.pathname = '/ppt' + pathname.slice(5);
      return Response.redirect(url.toString(), 301);
    }

    // ---- the site -------------------------------------------------------
    return withSiteHeaders(await env.ASSETS.fetch(request), url);
  },
};

/* ------------------------------------------------------------------ proxy */

async function proxy(request, url, upstream) {
  const target = new URL(upstream);
  target.search = url.search;

  const res = await fetch(target.toString(), {
    method: request.method === 'HEAD' ? 'HEAD' : 'GET',
    headers: {
      accept: request.headers.get('accept') || 'image/svg+xml,text/html;q=0.9,*/*;q=0.8',
      'user-agent': 'datalink.ac',
    },
  });

  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(CORS)) headers.set(k, v);
  // The renderer decides how long a link stays fresh; keep its answer.
  if (!headers.has('cache-control')) headers.set('cache-control', 'public, max-age=300');
  headers.set('x-datalink-host', 'datalink.ac');

  return new Response(res.body, { status: res.status, headers });
}

/* ----------------------------------------------------------------- helpers */

async function fetchRender(url, path) {
  const target = new URL(UPSTREAM.draw + path.replace(/^\/draw/, ''));
  target.search = url.search;
  const res = await fetch(target.toString(), { headers: { 'user-agent': 'datalink.ac' } });
  if (!res.ok) return null;
  return res.text();
}

/**
 * Every rendered output embeds the data it was drawn from, so the picture can
 * always be parsed back into the spec it came from. That is what lets an agent
 * read the chart without reading pixels.
 */
function extractMetadata(svg) {
  const m = svg.match(/<metadata>([\s\S]*?)<\/metadata>/);
  if (!m) return null;
  const raw = m[1]
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
      ...CORS,
    },
  });
}

async function withSiteHeaders(res, url) {
  const headers = new Headers(res.headers);
  headers.set(
    'content-security-policy',
    [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'sha256-Du+OJKJSbdUgz5nrHeWWINvez6XKDDU/tyj/5c2uvwo='",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'self' https://po6.sh https://www.x-cmd.com",
      "base-uri 'none'",
      "form-action 'none'",
      "object-src 'none'",
    ].join('; '),
  );
  headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  headers.set('x-content-type-options', 'nosniff');
  if (url && url.pathname.startsWith('/assets/')) {
    headers.set('cache-control', 'public, max-age=3600');
  }
  return new Response(res.body, { status: res.status, headers });
}
