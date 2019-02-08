const fs = require('fs');
require('winston-daily-rotate-file');
const { createLogger, format, transports } = require('winston');

const { env } = require('../../config');

const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  level: env === 'development' ? 'verbose' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
      ),
    }),
    new transports.DailyRotateFile({
      filename: `${logDir}/%DATE%-reports.log`,
      datePattern: 'YYYY-MM-DD',
    }),
  ],
});

module.exports = logger;
