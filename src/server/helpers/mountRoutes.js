const mountRoutes = (server, routers) => {
  Object.values(routers).forEach((router) => {
    server.use(router.routes());
  });
};

module.exports = mountRoutes;
