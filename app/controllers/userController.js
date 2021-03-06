/**
 * Created by arno on 2016/9/10.
 */

module.exports={
    index:function(req, res, next) {
        req.models.user.findOne({id:req.user_id},function(err,model){
            if(err)  return res.json(req.response(req.status.DB_ERROR ,err));
            delete model.password;
            return res.json(req.response(req.status.OK ,model))
        })
    },
    list:function(req, res, next) {
        req.models.relationship.find({'user_id':req.user_id},function(err,model){
            if(err) return res.json(req.response(req.status.DB_ERROR ,err));
            var friendIds=[];
            model.forEach(function(d){
                friendIds.push(d.friend_id);
            })
            if(friendIds.length <= 0){
                return res.json(req.response(req.status.OK ,[]))
            }
            req.models.user.find({'id':friendIds},function(err,models){
                if(err) return  res.json(req.response(req.status.DB_ERROR ,err));
                models.forEach(function(d){
                    delete d.password;
                });
            return res.json(req.response(req.status.OK ,models))
            })
        })

    }
}