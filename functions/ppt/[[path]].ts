/**
 * `/ppt` and `/ppt/…` — the slide-deck renderer, forwarded to x-cmd.com.
 *
 * The deck renderer's own stylesheets and scripts live at `/ppt/assets/…`
 * (the paths it writes into the page), so the whole prefix is forwarded —
 * otherwise the deck arrives unstyled.
 *
 * x-cmd.com/ppt is the production address, but it is not deployed yet;
 * po6.sh runs the same code.
 */

const UPSTREAM = 'https://po6.sh/ppt';

interface PagesFunction {
  request: Request;
  env: Record<string, unknown>;
  params: Record<string, string[]>;
}

export const onRequest: PagesFunction = async ({ request, params }) => {
  const url = new URL(request.url);

  const rest = (params.path ?? []).map((p) => encodeURIComponent(p)).join('/');
  const target = new URL(UPSTREAM + (rest ? '/' + rest : ''));
  target.search = url.search;

  const res = await fetch(target.toString(), {
    method: request.method === 'HEAD' ? 'HEAD' : 'GET',
    headers: {
      accept: request.headers.get('accept') || 'text/html;q=0.9,*/*;q=0.8',
      'user-agent': 'datalink.ac',
    },
  });

  const headers = new Headers(res.headers);
  headers.set('access-control-allow-origin', '*');
  if (!headers.has('cache-control')) headers.set('cache-control', 'public, max-age=300');
  headers.set('x-datalink-host', 'datalink.ac');

  return new Response(res.body, { status: res.status, headers });
};
