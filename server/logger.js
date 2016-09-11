/**
 * Created by arno on 2016/9/11.
 */

var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'},

    ]
});
//log4js.configure({
//    appenders: [
//        {type: 'console'},
//        {type: 'file', filename: 'logs/' + name + '.log', category: name},
//
//    ]
//});
module.exports = function (name) {

    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.file('logs/' + name + '.log'),name);
    var logger = log4js.getLogger(name);
    logger.setLevel('info')
    return logger
};