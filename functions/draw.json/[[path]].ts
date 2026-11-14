/**
 * The data view: the spec, read out of the render.
 *
 * `/draw.json?type=pie&…` is the same link as `/draw?type=pie&…`, read as text
 * instead of as a picture. x-cmd.com has no JSON view of a render (see
 * x-cmd/draw#24), so this pulls the render and takes the spec out of the
 * `<metadata>` the renderer embeds in every output.
 *
 * The renderers themselves are not here: `/draw`, `/draw/explore` and `/ppt`
 * are forwarded to x-cmd.com by origin rules on the zone, so there is exactly
 * one implementation of every kind.
 */

const UPSTREAM = 'https://www.x-cmd.com/draw';

interface PagesFunction {
  request: Request;
  env: Record<string, unknown>;
}

export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);

  // /draw.json/arch2?n=…  →  the arch2 renderer's spec
  const rest = url.pathname.replace(/^\/draw\.json/, '');

  const target = new URL(UPSTREAM + (rest ? rest : ''));
  target.search = url.search;

  let body: string;
  try {
    const res = await fetch(target.toString(), {
      headers: { accept: 'image/svg+xml,*/*', 'user-agent': 'datalink.ac' },
    });
    if (!res.ok) {
      return json({ error: `renderer said ${res.status}`, url: target.toString() }, res.status);
    }
    body = await res.text();
  } catch (e) {
    return json({ error: `renderer unreachable: ${e}` }, 502);
  }

  const meta = extractMetadata(body);
  if (!meta) return json({ error: 'no metadata in output', url: target.toString() }, 502);
  return json(meta, 200);
};

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
