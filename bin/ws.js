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

    var server = require('http').createServer()
        , url = require('url')
        , WebSocketServer = require('ws').Server
        , wss = new WebSocketServer({server: server});
    wss.on('connection', function connection(ws) {
            var location = url.parse(ws.upgradeReq.url, true);

            var userServer = {};
            var userName = {};
            ws.on('newUser', function incoming(data) {
                    var nickname = data.user_name,
                        user_id = data.user_id;
                    userServer[user_id] = socket;
                    userName[user_id] = nickname;
                }
            );
            ws.on('message', function incoming(data) {   //data.to  发给你对像　　data.user 自己　data.msg
                    console.log('received: %s', data);
                    var newData =JSON.parse(data);
                    userServer[newData.to].emit('to' + newData.to, data);
                }
            );
            ws.on('close', function (data) {
                console.log( data);
            })

            models.collections.user.findOne({name: 'username'}, function (err, model) {
                if (err) return logger.error('post db error select user name ', err);
                console.log(model);
                ws.send(JSON.stringify(model));
                console.log(location);
            });
            ws.send('something');


        }
    );
    server.on('request', app);
    server.listen(port, function () {
        console.log('Listening on' + server.address().port)
    });

});



