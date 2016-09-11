/**
 * Created by arno on 2016/9/10.
 */
module.exports={
    port:3000,
    redis_port: 6379,
    redis_host: 'localhost',
    redis_db:'db',
    redis_password:'',
    db_type:'mongo',//mongo  mysql
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
            host      : 'localhost',
            port      : 3306,
            user      : 'username',
            password  : 'password',
            database  : 'database_name',
            charset   : 'utf8'
        }
    }

}