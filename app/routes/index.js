var jwt    = require('jsonwebtoken');
var indexRoutes = require('./indexRoute');
var userRoutes = require('./userRoute');
var authRoutes = require('./authRoute');

var logger = require('../../server/logger')('test');
module.exports = function(app){

  app.use('/login', authRoutes);
  app.use(function(req, res, next){
    var token =  req.headers.authorization ;
    if(token) {
      jwt.verify(token, req.superSecret, function(err, decoded) {
        if (err) {
          return res.json(req.response(req.status.TOKEN_ERROR));
        } else {
          if(new Date().getTime() > decoded.exp*1000 ){
            return res.json(req.response(req.status.TOKEN_ERROR));
          }
          next();
        }
      });
    }else{
      return res.json(req.response(req.status.TOKEN_ERROR));
    }

  });
  app.use('/', indexRoutes);
  app.use('/user', userRoutes);
};