/**
 * `/draw` and `/draw/…` — the renderers, forwarded to x-cmd.com.
 *
 * datalink.ac is a front door, not a second implementation: `/draw?type=pie` is
 * x-cmd.com's renderer reached under another name, so the address is the only
 * difference and there is exactly one of every kind.
 *
 * (The zone is on the Free plan, and Cloudflare's Origin Rules can only override
 * the destination host on paid plans — so the forwarding is a Pages Function
 * rather than a rule. It lives with the site in the same Pages project, and the
 * site's own pages are static assets that cost no function quota.)
 */

const UPSTREAM = 'https://www.x-cmd.com/draw';

interface PagesFunction {
  request: Request;
  env: Record<string, unknown>;
  params: Record<string, string[]>;
}

export const onRequest: PagesFunction = async ({ request, params }) => {
  const url = new URL(request.url);

  // /draw/arch2?n=…  →  upstream /draw/arch2?n=…
  const rest = (params.path ?? []).map((p) => encodeURIComponent(p)).join('/');
  const target = new URL(UPSTREAM + (rest ? '/' + rest : ''));
  target.search = url.search;

  const res = await fetch(target.toString(), {
    method: request.method === 'HEAD' ? 'HEAD' : 'GET',
    headers: {
      accept: request.headers.get('accept') || 'image/svg+xml,text/html;q=0.9,*/*;q=0.8',
      'user-agent': 'datalink.ac',
    },
  });

  const headers = new Headers(res.headers);
  headers.set('access-control-allow-origin', '*');
  headers.set('access-control-allow-methods', 'GET, HEAD, OPTIONS');
  headers.set('access-control-allow-headers', '*');
  // The renderer decides how long a link stays fresh; keep its answer.
  if (!headers.has('cache-control')) headers.set('cache-control', 'public, max-age=300');
  headers.set('x-datalink-host', 'datalink.ac');

  return new Response(res.body, { status: res.status, headers });
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, HEAD, OPTIONS',
      'access-control-allow-headers': '*',
    },
  });
