// User model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fullName: {type: String, required: true},
    login: {type: String},
});

module.exports = mongoose.model('DeviceUser', schema);