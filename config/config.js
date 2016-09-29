/**
 * Created by arno on 2016/9/10.
 */
module.exports={
    port:3008,
    redis_port: 6379,
    redis_host: 'localhost',
    redis_db:'db',
    redis_password:'',
    db_type:'mysql',//mongo  mysql,
    secret:'11111111111111111', //token 加密
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
            host      : 'qdm164639335.my3w.com',
            port      : 3306,
            user      : 'qdm164639335',
            password  : 'xiaochen100200',
            database  : 'qdm164639335_db',
            charset   : 'utf8'
        }
    }

}
