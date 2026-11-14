/**
 * `/d` used to be the path before the site moved to x-cmd.com's own shape.
 * It still works — it just forwards to `/draw`, which is the same renderer.
 */

interface PagesFunction {
  request: Request;
}

export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  url.pathname = url.pathname.replace(/^\/d/, '/draw');
  return Response.redirect(url.toString(), 301);
};
