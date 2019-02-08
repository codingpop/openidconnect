const Controllers = require('./Controllers');
const { v1Router: routes } = require('../../routers');

routes.put('/users/:userId', Controllers.updateUser);
routes.post('/users/register', Controllers.registerUser);

module.exports = routes;
