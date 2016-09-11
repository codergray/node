/**
 * Created by arno on 2016/9/10.
 */
var logger = require('../../server/logger')('logindex');
module.exports={
    index:function(req, res, next) {
        logger.info('home')
        res.render('index', { title: 'Express'})
    }
}