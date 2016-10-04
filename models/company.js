// Company model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    address: {type: String},
    device: [{type: Schema.Types.ObjectId, ref: 'Device'}]
});

module.exports = mongoose.model('Company', schema);
