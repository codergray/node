/**
 * Created by Administrator on 2016/9/26.
 */

var app = require('../app');
var config = require('../config/config');
var logger = require('../server/logger')('cheese');

var port = normalizePort(config.port || '3000');
app.set('port', port);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}


var Waterline = require('waterline');
var waterline = require('../config/waterline');

waterline.orm.initialize(waterline.wlconfig, function (err, models) {
    if (err) {
        logger.error('waterline initialize failed, err:', err);
        return;
    }
    logger.info('waterline initialize success.');
    app.set('models', models.collections);
    var userServer = {};
    var userIds = {};
    var server = require('http').createServer(app);

    var io = require('socket.io').listen(server);


    io.on('connection', function connection(ws) {
            ws.emit('news', {type: 'add'});
            ws.on('newUser', function (data) {
                var user_id = data.user_id;
                userServer[user_id] = ws;
                userIds[ws.id] = user_id;
                console.log(userIds);
            });


            ws.on('message', function incoming(data) {   //data.to  发给你对像　　data.user 自己　data.msg
                    console.log('message', data);
                    if (userServer[data.to]) {
                        console.log('在线', data);
                        userServer[data.to].emit('to' + data.to, data);
                        userServer[data.user].emit('to' + data.user, data);
                    } else {
                        console.log('不在线');
                    }
                }
            );

            ws.on('disconnect', function () {
                delete  userServer[userIds[ws.id]];
                delete  userIds[ws.id];
            })
            ws.on('msg', function (data) {
                io.emit('onlineCount', freeList)
                //如果直接用io.emit来发送数据的话，这代表广播的形式，就是当前所有打开服务的前端页面都会收到这条消息。
                ws.emit('welcome', {msg: '欢迎...'})//这里将给当前连接的页面发送一个欢迎的对象数据
            })

            //models.collections.user.findOne({name: 'chenxiao'}, function (err, model) {
            //    if (err) return logger.error('post db error select user name ', err);
            //    console.log(model);
            //    ws.send(JSON.stringify(model));
            //});
            //ws.send(JSON.stringify(process.memoryUsage()));


        }
    );
    server.listen(port,'172.17.5.78', function () {
        console.log('listening on *:', port);
    });


});



