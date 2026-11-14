/** The data view, at its old name. Same thing, one path over. */

interface PagesFunction {
  request: Request;
}

export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  url.pathname = url.pathname.replace(/^\/d\.json/, '/draw.json');
  return Response.redirect(url.toString(), 301);
};
