/**
 * Created by arno on 2016/9/10.
 */
var logger = require('../../server/logger');
var logIndex =logger('logindex');
var logList =logger('logList');
module.exports={
    index:function(req, res, next) {
        logIndex.error('user index')
        res.send('user index')
    },
    list:function(req, res, next) {
        logList.info('user list')
        res.send('user list')
    }
}