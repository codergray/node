/**
 * Created by arno on 2016/9/10.
 */
var Waterline = require('waterline');
var mongoAdapter = require('sails-mongo');
var mysqlAdapter = require('sails-mysql');
var config = require('./config');
var user =require('../app/models/userModels');;
var wlconfig = {
    adapters: {
        mysql: mysqlAdapter,
        default: mysqlAdapter
    },
    connections:{
        mysql: {
            adapter: 'mysql',
            host : config.connections.mysql.host,
            port : config.connections.mysql.port,
            user : config.connections.mysql.user,
            password : config.connections.mysql.password,
            database : config.connections.mysql.database
        }
    }
};
var orm = new Waterline();
orm.loadCollection(user);
exports.wlconfig = wlconfig;
exports.orm = orm;