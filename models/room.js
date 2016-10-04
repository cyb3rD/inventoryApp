// Room model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    building: {type: String, required: true},
    roomNum: {type: String, required: true},
    users: [{type: Schema.Types.ObjectId, ref: 'DeviceUser'}]
});

module.exports = mongoose.model('Room', schema);