const logger = require('./logger');
const mountRoutes = require('./mountRoutes');
const errorFactory = require('./errorFactory');
const errorMiddleware = require('./errorMiddleware');

module.exports = {
  logger,
  mountRoutes,
  errorFactory,
  errorMiddleware,
};
