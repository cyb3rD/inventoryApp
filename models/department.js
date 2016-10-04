// Department model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    device: [{type: Schema.Types.ObjectId, ref: 'Device'}]
});

module.exports = mongoose.model('Department', schema);