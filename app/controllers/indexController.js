/**
 * Created by arno on 2016/9/10.
 */

module.exports={
    index:function(req, res, next) {
        res.render('index', { title: 'Express'})
    }
}