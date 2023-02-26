import routes from "./routes";

export function localMiddlewares(req, res, next) {
  res.locals.siteName = "YTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
}
