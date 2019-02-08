const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const routes = require('./server/routes');
const { port, env } = require('./config');
const { logger, mountRoutes } = require('./server/helpers');

const dev = env !== 'production';
const nextApp = next({ dev, dir: './src/client' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const koaServer = new Koa();
  const router = new Router();

  mountRoutes(koaServer, routes);

  router.get('*', async (ctx) => {
    if (!ctx.path.match(/api/)) {
      await handle(ctx.req, ctx.res);

      ctx.respond = false;
    }
  });

  koaServer.use(router.routes());

  koaServer.listen(port, () => {
    logger.info('Server is up! 🎉');
  });
});
