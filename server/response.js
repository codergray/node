/**
 * Created by arno on 2016/9/12.
 */
var status = {
    OK: 'ok'

};
var stakeys = {
    ok: {code: 1, msg: '成功'}
};
exports.response = function (staKey, data, msg) {
    var d = stakeys[staKey];
    return {code: d.code, data: data || '', msg: msg || d.msg}
};
exports.status = status;