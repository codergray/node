/**
 * Created by arno on 2016/9/10.
 */
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'user',
    connection: 'mongo',
    attributes: {
        id: {type: 'num'},
        name: {type: 'string'}
    }
})