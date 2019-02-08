const logger = require('./logger');

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    logger.info(err.msg);

    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message,
    };
  }
};

module.exports = errorMiddleware;
