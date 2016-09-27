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
    var userName = {};
    var server = require('http').createServer()
        , url = require('url')
        , WebSocketServer = require('ws').Server
        , wss = new WebSocketServer({server: server});
    wss.on('connection', function connection(ws) {
            var location = url.parse(ws.upgradeReq.url, true);


            ws.on('message', function incoming(data) {   //data.to  发给你对像　　data.user 自己　data.msg
                   console.log('message',data);
                    var newData = JSON.parse(data);
                    if(newData.type == 'newUser'){
                        var nickname = newData.user_name,
                            user_id = newData.user_id;
                        userServer[user_id] = ws;
                        userName[user_id] = nickname;
                        console.log(userServer);
                    }else{
                        if(userServer[newData.to]){
                            console.log('在线',newData);
                            userServer[newData.to].emit('to' + newData.to, data);
                            userServer[newData.user].emit('to' + newData.user, data);
                        }else{
                            console.log('不在线');
                        }

                    }

                }
            );
            ws.on('close', function () {
                console.log(JSON.stringify(process.memoryUsage()));
            })
            ws.on('open', function (data) {
                console.log('open', data);
            })

            //models.collections.user.findOne({name: 'chenxiao'}, function (err, model) {
            //    if (err) return logger.error('post db error select user name ', err);
            //    console.log(model);
            //    ws.send(JSON.stringify(model));
            //});
            ws.send('something');
            console.log('arry',ws.clients);
            //ws.send(JSON.stringify(process.memoryUsage()));


        }
    );
    server.on('request', app);
    server.listen(port, function () {
        console.log('Listening on' + server.address().port)
    });

});



