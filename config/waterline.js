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
        mongo: mongoAdapter,
        default: 'mongo'
    },
    connections:{
        mongo: {
            adapter: 'mongo',
            url: config.connections.mongo
        }
    }
};
var orm = new Waterline();
orm.loadCollection(user);
exports.wlconfig = wlconfig;
exports.orm = orm;