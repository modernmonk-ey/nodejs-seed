const transports = require('./transports')
var winston = require('winston');

var logger = new winston.createLogger({
    defaultMeta: { service: process.env.APP_NAME },
    format: winston.format.json(),
    transports: [
        new winston.transports.File(transports.file),
        new winston.transports.Console(transports.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};

module.exports = logger;