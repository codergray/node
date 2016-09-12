/**
 * Created by arno on 2016/9/10.
 */

var jwt = require('jsonwebtoken');
var logger = require('../../server/logger')('logindex');
module.exports = {
    post: function (req, res, next) {

        req.models.user.find({name: req.body.name}, function (err, model) {
            if (err) return logger.error('db error', err);
            if ( model[0] &&req.body.password == model[0].password) {
                var token = jwt.sign(model[0], req.superSecret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.json(req.response(req.status.OK ,{name:model[0].name,token:token}));
            }
            return res.json({success: false, message: 'password error '});
        });

    },
    add: function (req, res, next) {

        req.models.user.find({name: req.body.name}, function (err, m) {
            if (err) return  res.json({success: false, message: ' db error'});
            if(m[0] && m[0].name == req.body.name){
                return res.json({success: false, message: 'User name exists'})
            }
            return  req.models.user.create({name: req.body.name, password: req.body.password}, function (err, model) {
                if (err)  return res.json({success: false, message: 'error '});
                return res.json({success: true, data: model});
            });
        });



    }
}