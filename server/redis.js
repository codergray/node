/**
 * Created by arno on 2016/9/10.
 */
var config = require('../config/config');
var Redis = require('ioredis');
var logger = require('./logger')('redis')

var client = new Redis({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
    password: config.redis_password,
});

client.on('error', function (err) {
    if (err) {
        logger.error('connect to redis error, check your redis config', err);
        process.exit(1);
    }
    logger.info('redis start success');
})

exports = module.exports = client;