/**
 * Created by arno on 2016/9/10.
 */
var Waterline = require('waterline');
var config = require('../../config/config');
module.exports = Waterline.Collection.extend({
    identity: 'user',
    connection: config.db_type,
    attributes: {
        name: {type: 'string'}
    }
})