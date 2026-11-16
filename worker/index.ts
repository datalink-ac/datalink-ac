/**
 * datalink.ac — the forwarding edge.
 *
 * The site itself is static and served by GitHub Pages. This Worker only
 * answers for the renderer paths, so that `datalink.ac/draw?…` keeps working
 * and keeps meaning exactly what `www.x-cmd.com/draw?…` means: one
 * implementation of every kind, two addresses.
 *
 *   /draw, /draw/…      →  www.x-cmd.com/draw, www.x-cmd.com/draw/…
 *   /explore, /explore/… →  www.x-cmd.com/draw/explore, …
 *   /ppt, /ppt/…         →  www.x-cmd.com/ppt, …
 *   /draw.json, …        →  the data view: the spec, read out of the render
 *                          (x-cmd.com has no JSON view of a render yet —
 *                           see x-cmd/draw#24 — so this pulls the render and
 *                           takes the spec out of the `<metadata>` the
 *                           renderer embeds in every output)
 *   /d, /d.json, /deck   →  301 to the paths above
 */

const DRAW = 'https://www.x-cmd.com/draw';
const PPT = 'https://www.x-cmd.com/ppt';

interface Env {
  [key: string]: unknown;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // the old addresses — one hop, then the real thing
    if (path === '/d' || path.startsWith('/d/')) return moved('/draw' + path.slice(1) + url.search);
    if (path === '/d.json' || path.startsWith('/d.json/')) return moved('/draw.json' + path.slice(6) + url.search);
    if (path === '/deck' || path.startsWith('/deck/')) return moved('/ppt' + path.slice(5) + url.search);

    // the data view — the same link, read as text
    if (path === '/draw.json' || path.startsWith('/draw.json/')) return dataView(url);

    // the renderers themselves
    if (path === '/explore' || path.startsWith('/explore/')) {
      return forward(request, DRAW + '/explore' + path.slice('/explore'.length) + url.search);
    }
    if (path === '/draw' || path.startsWith('/draw/')) {
      return forward(request, DRAW + path.slice('/draw'.length) + url.search);
    }
    if (path === '/ppt' || path.startsWith('/ppt/')) {
      return forward(request, PPT + path.slice('/ppt'.length) + url.search);
    }

    return new Response('not found\n', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  },
};

function moved(to: string): Response {
  return new Response(null, { status: 301, headers: { location: to } });
}

/** Pass the render through, with the CORS and cache headers the browsers want. */
async function forward(request: Request, target: string): Promise<Response> {
  const res = await fetch(target, {
    headers: {
      accept: request.headers.get('accept') || '*/*',
      'user-agent': 'datalink.ac',
    },
  });
  const headers = new Headers(res.headers);
  headers.set('access-control-allow-origin', '*');
  if (!headers.has('cache-control')) headers.set('cache-control', 'public, max-age=300');
  headers.set('x-datalink-host', 'datalink.ac');
  return new Response(res.body, { status: res.status, headers });
}

/** The spec, read out of the render. */
async function dataView(url: URL): Promise<Response> {
  const rest = url.pathname.replace(/^\/draw\.json/, '');
  const target = new URL(DRAW + rest);
  target.search = url.search;

  let body: string;
  try {
    const res = await fetch(target.toString(), {
      headers: { accept: 'image/svg+xml,*/*', 'user-agent': 'datalink.ac' },
    });
    if (!res.ok) return json({ error: `renderer said ${res.status}`, url: target.toString() }, res.status);
    body = await res.text();
  } catch (e) {
    return json({ error: `renderer unreachable: ${e}` }, 502);
  }

  const meta = extractMetadata(body);
  if (!meta) return json({ error: 'no metadata in output', url: target.toString() }, 502);
  return json(meta, 200);
}

function extractMetadata(svg: string): unknown {
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

function json(obj: unknown, status: number): Response {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'access-control-allow-origin': '*',
    },
  });
}
