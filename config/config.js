/**
 * Created by arno on 2016/9/10.
 */
module.exports={
    port:3008,
    redis_port: 6379,
    redis_host: 'localhost',
    redis_db:'db',
    redis_password:'',
    db_type:'mysql',//mongo  mysql
    connections:{
        mongo: {
            adapter: 'sails-mongo',
            host: 'localhost', // defaults to `localhost` if omitted
            port: 27017, // defaults to 27017 if omitted
            user: 'username_here', // or omit if not relevant
            password: 'password_here', // or omit if not relevant
            database: 'database_name_here' // or omit if not relevant
        },
        mysql: {
            module    : 'sails-mysql',
            host      : '172.16.20.182',
            port      : 5656,
            user      : 'wy_test1',
            password  : 'A123a456',
            database  : 'app_test',
            charset   : 'utf8'
        }
    }

}