/**
 * Created by arno on 2016/9/10.
 */
module.exports={
    port:3000,
    redis_port: 6379,
    redis_host: 'localhost',
    redis_db:'db',
    redis_password:'',
    connections:{
        someMongoDb: {
            adapter: 'sails-mongo',
            host: 'localhost', // defaults to `localhost` if omitted
            port: 27017, // defaults to 27017 if omitted
            user: 'username_here', // or omit if not relevant
            password: 'password_here', // or omit if not relevant
            database: 'database_name_here' // or omit if not relevant
        },
        mysql: {
            module    : 'sails-mysql',
            host      : 'localhost',
            port      : 3306,
            user      : 'username',
            password  : 'password',
            database  : 'MySQL Database Name',
            charset   : 'utf8',
            collation : 'utf8_swedish_ci'
        },
        redis: {
            adapter: "sails-redis",
            port: 6379,
            host: 'localhost'
        }
    }

}