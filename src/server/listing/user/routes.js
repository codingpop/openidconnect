const Controllers = require('./Controllers');
const { v1Router: routes } = require('../../routers');

routes.get('/users', Controllers.getUsers);
routes.get('/users/:userId', Controllers.getUser);

module.exports = routes;
