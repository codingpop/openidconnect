require('dotenv').config();

const { PORT: port, NODE_ENV: env } = process.env;

module.exports = { port, env };
