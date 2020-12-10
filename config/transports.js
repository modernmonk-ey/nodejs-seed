var appRoot = require('app-root-path');
module.exports = {
  file: {
    level: process.env.LOG_LEVEL,
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 1024 * 1024 * 5,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: process.env.LOG_LEVEL,
    handleExceptions: true,
    json: true,
    colorize: true,
  }
}