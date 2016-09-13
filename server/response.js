/**
 * Created by arno on 2016/9/12.
 */
var status = {
    OK: 'OK',
    TOKEN_ERROR:'TOKEN_ERROR',
    AUTH_ERROR:'AUTH_ERROR',
    DB_ERROR:'DB_ERROR'

};
var stakeys = {
    OK: {code: 1, msg: '成功'},
    TOKEN_ERROR: {code: 401, msg: 'token已过期或不存在'},
    AUTH_ERROR: {code: 1001, msg: '帐号或密码不正确'},
    DB_ERROR: {code: 3001, msg: '数据库操作失败'}
};
exports.response = function (staKey, data, msg) {
    var d = stakeys[staKey];
    return {code: d.code, data: data || '', msg: msg || d.msg}
};
exports.status = status;