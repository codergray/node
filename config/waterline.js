/**
 * Created by arno on 2016/9/10.
 */
var Waterline = require('waterline');
var mongoAdapter = require('sails-mongo');
var mysqlAdapter = require('sails-mysql');
var config = require('./config');
var Models =require('../app/models/');
var wlconfig = {
    adapters: {
        mongo: mongoAdapter,
        default: mongoAdapter
    },
    connections:{
        mongo: {
            adapter: 'mongo',
            host : config.connections.mongo.host,
            port : config.connections.mongo.port,
            user : config.connections.mongo.user,
            password : config.connections.mongo.password,
            database : config.connections.mongo.database
        }
    }
};
if(config.db_type=='mysql') {

    wlconfig = {
        adapters: {
            mysql: mysqlAdapter,
            default: mysqlAdapter
        },
        connections: {
            mysql: {
                adapter: 'mysql',
                host: config.connections.mysql.host,
                port: config.connections.mysql.port,
                user: config.connections.mysql.user,
                password: config.connections.mysql.password,
                database: config.connections.mysql.database
            }
        }
    };
}
var orm = new Waterline();
for ( var key in Models ) {
    orm.loadCollection(Models[key]);
}
exports.wlconfig = wlconfig;
exports.orm = orm;