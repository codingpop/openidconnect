const statuses = {
  Conflict: 409,
  NotFound: 404,
  Forbidden: 403,
  BadRequest: 400,
  Unauthorized: 401,
  NotAcceptable: 406,
  RequestTimeout: 408,
  TooManyRequests: 429,
  InternalServerError: 500,
  UnsupportedMediaType: 415,
};

const errorFactory = (type = 'NotFound') => {
  if (!statuses[type]) {
    throw new Error('Unknown error.');
  }

  class CustomError extends Error {
    constructor(message) {
      super();

      Error.captureStackTrace(this, this.constructor);
      this.name = type;
      this.message = message;
      this.status = statuses[type];
    }
  }

  return CustomError;
};

module.exports = errorFactory;
