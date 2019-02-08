const Router = require('koa-router');

exports.v1Router = new Router({
  prefix: '/api/v1',
});

exports.v2Router = new Router({
  prefix: '/api/v2',
});
