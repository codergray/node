
var indexRoutes = require('./indexRoute');
var userRoutes = require('./userRoute');


module.exports = function(app){
  app.use('/', indexRoutes);
  app.use('/user', userRoutes);
};