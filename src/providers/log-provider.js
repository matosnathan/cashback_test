const log4js = require('log4js');

const logger = log4js.getLogger();

logger.info("Cashback logger configurado");

logger.shutdown = log4js.shutdown;

module.exports = logger;