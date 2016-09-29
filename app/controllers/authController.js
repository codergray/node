/**
 * Created by arno on 2016/9/10.
 */

var jwt = require('jsonwebtoken');
var logger = require('../../server/logger')('db');
module.exports = {
    post: function (req, res, next) {

        req.models.user.findOne({name: req.body.name}, function (err, model) {
            if (err) return res.json(req.response(req.status.DB_ERROR ,err));
            if ( model &&req.body.password == model.password) {
                var token = jwt.sign(model, req.superSecret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.json(req.response(req.status.OK ,{name:model.name,token:token,id:model.id}));
            }
            return res.json(req.response(req.status.AUTH_ERROR));
        });

    },
    add: function (req, res, next) {

        req.models.user.findOne({name: req.body.name}, function (err, m) {
            if (err) return res.json(req.response(req.status.DB_ERROR ,err));
            if(m&& m.name == req.body.name){
                return res.json(req.response(req.status.AUTH_ERROR,'','账号已存在'));
            }
            req.models.user.create({name: req.body.name, password: req.body.password}, function (err, model) {
                if (err)  return res.json(req.response(req.status.DB_ERROR ,err));

                return res.json(req.response(req.status.OK ,model))
            });
        });



    }
}