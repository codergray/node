/**
 * Created by arno on 2016/9/10.
 */

module.exports={
    index:function(req, res, next) {
        req.models.user.create({name:'chenxiao',password:'111111'},function(err,model){
            if(err) return logIndex.error('user index error',err);
            logIndex.info('user index')
        })
        res.send('user index')
    },
    list:function(req, res, next) {
        req.models.relationship.find({'user_id':req.user_id},function(err,model){
            if(err) return req.response(req.status.DB_ERROR ,err);
            var friendIds=[];
            model.forEach(function(d){
                friendIds.push(d.friend_id);
            })
            console.log(friendIds);
            if(friendIds.length <= 0){
                return req.response(req.status.OK ,[])
            }
            req.models.user.find({'user_id':friendIds},function(err,models){
                if(err) return  req.response(req.status.DB_ERROR ,err);
            return req.response(req.status.OK ,models)
            })
        })

    }
}