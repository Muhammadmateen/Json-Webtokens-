/**
 * Created by AQ on 7/29/2016.
 */


var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean

    });

module.exports = mongoose.model('User',schema);

