/**
 * datalink.ac — Cloudflare Worker
 *
 * Two jobs, one idea:
 *
 *   1. Serve the concept site (static assets).
 *   2. Make this domain itself a datalink host, so every demo on the page is
 *      a link you can copy, share, and hand to an agent:
 *
 *        /d?<params>          → the rendered view (SVG / HTML)
 *        /d/<kind>?<params>   → the specialised renderers (arch2, seq, mindmap, …)
 *        /d.json?<params>     → the data spec an agent reads — no pixels involved
 *        /d?type=table&…      → the table renderer, native to this site
 *        /deck?<params>       → a slide deck (markdown in, deck out)
 *
 * The reference renderer for charts and diagrams lives in x-cmd/draw; the deck
 * renderer in x-cmd/ppt. Both are stateless: the parameters *are* the data.
 */

const RENDERER = 'https://x-cmd.com/draw';
const DECKER = 'https://po6.sh/ppt';

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, HEAD, OPTIONS',
  'access-control-allow-headers': '*',
};

export default {
  async fetch(request, env, ctx) {
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

    // ---- the agent view: the data behind the picture, as JSON -------------
    if (pathname === '/d.json' || pathname.startsWith('/d.json/')) {
      const type = url.searchParams.get('type');
      if (type === 'table') {
        return jsonResponse(tableSpec(url), 200);
      }
      const rest = pathname.replace(/^\/d\.json/, '') || '/';
      const svg = await fetchRenderer(url, rest === '/' ? '/' : rest);
      if (!svg) return jsonResponse({ error: 'renderer unreachable' }, 502);
      const meta = extractMetadata(svg.body);
      if (!meta) return jsonResponse({ error: 'no metadata in output' }, 502);
      return jsonResponse(meta, 200);
    }

    // ---- the human view: render ------------------------------------------
    if (pathname === '/d' || pathname === '/d/') {
      if (url.searchParams.get('type') === 'table') {
        return tableResponse(url);
      }
      return proxy(request, url, RENDERER, '/');
    }

    if (pathname.startsWith('/d/')) {
      return proxy(request, url, RENDERER, pathname.replace(/^\/d/, '') || '/');
    }

    if (pathname === '/deck' || pathname === '/deck/') {
      return proxy(request, url, DECKER, '/');
    }

    if (pathname.startsWith('/deck/')) {
      return proxy(request, url, DECKER, pathname.replace(/^\/deck/, '') || '/');
    }

    // ---- the site --------------------------------------------------------
    return withSiteHeaders(await env.ASSETS.fetch(request), url);
  },
};

/* ------------------------------------------------------------------ proxy */

async function proxy(request, url, origin, path) {
  const target = new URL(origin + path);
  target.search = url.search;

  const upstream = await fetch(target.toString(), {
    method: request.method === 'HEAD' ? 'HEAD' : 'GET',
    headers: {
      accept: request.headers.get('accept') || 'image/svg+xml,text/html;q=0.9,*/*;q=0.8',
      'user-agent': 'datalink.ac',
    },
  });

  const headers = new Headers(upstream.headers);
  for (const [k, v] of Object.entries(CORS)) headers.set(k, v);
  // The renderer decides how long a link stays fresh; keep its answer.
  if (!headers.has('cache-control')) headers.set('cache-control', 'public, max-age=300');
  headers.set('x-datalink-host', 'datalink.ac');

  return new Response(upstream.body, { status: upstream.status, headers });
}

/* ------------------------------------------------------------------ table */

/**
 * A table, in the same flat-parameter style as every other datalink:
 *
 *   /d?type=table&cols=Name,Score&rows=Alice:10;Bob:8
 *
 * `:` separates cells inside a row, `;` separates rows.
 */
function tableSpec(url) {
  const p = url.searchParams;
  const cols = (p.get('cols') || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const rows = (p.get('rows') || '')
    .split(';')
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) => r.split(':').map((c) => c.trim()));

  return {
    generator: 'datalink.ac',
    template: 'table',
    spec: { cols, rows },
  };
}

function tableResponse(url) {
  const p = url.searchParams;
  const { cols, rows } = tableSpec(url).spec;
  const title = p.get('title') || '';

  if (!cols.length && !rows.length) {
    return new Response(
      'A table needs data. Try ?cols=Name,Score&rows=Alice:10;Bob:8',
      { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8', ...CORS } },
    );
  }

  const head = cols.length
    ? `<tr>${cols.map((c) => `<th>${esc(c)}</th>`).join('')}</tr>`
    : '';
  const body = rows
    .map(
      (r) =>
        `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`,
    )
    .join('');
  const headHtml = head
    ? `<thead>${head}</thead>`
    : '';

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title || 'table')} — datalink</title>
<style>
  :root{color-scheme:light dark}
  body{margin:0;padding:32px;font:15px/1.5 ui-sans-serif,-apple-system,"Segoe UI","PingFang SC",sans-serif;
       background:#08090c;color:#eef1f7}
  table{border-collapse:collapse;width:100%;max-width:900px;margin:0 auto}
  caption{text-align:left;font-weight:600;font-size:18px;padding:0 0 12px}
  th,td{text-align:left;padding:10px 14px;border-bottom:1px solid #232838}
  th{color:#8ab4ff;font-weight:600;font-size:13px;letter-spacing:.04em;text-transform:uppercase}
  tr:hover td{background:#12151d}
  footer{margin:28px auto 0;max-width:900px;font:12px ui-monospace,Menlo,monospace;color:#6b7688}
  a{color:#5ee7a0}
</style></head>
<body>
<table>${title ? `<caption>${esc(title)}</caption>` : ''}${headHtml}<tbody>${body}</tbody></table>
<footer>${esc(url.origin + url.pathname + url.search)}</footer>
</body></html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'x-datalink-host': 'datalink.ac',
      ...CORS,
    },
  });
}

/* ----------------------------------------------------------------- helpers */

async function fetchRenderer(url, path) {
  const target = new URL(RENDERER + path);
  target.search = url.search;
  const res = await fetch(target.toString(), { headers: { 'user-agent': 'datalink.ac' } });
  if (!res.ok) return null;
  return { body: await res.text() };
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

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
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
      "frame-src 'self' https://po6.sh",
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
