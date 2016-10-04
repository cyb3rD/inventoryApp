// Device model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    brand: {type: String, required: true},
    modelName: {type: String, required: true},
    supply: [{type: Schema.Types.ObjectId, ref: 'Supply'}]
});

module.exports = mongoose.model('DeviceModel', schema);
