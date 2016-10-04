// Device model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    company: {type: Schema.Types.ObjectId, ref: 'Company'},
    department: {type: Schema.Types.ObjectId, ref: 'Department'},
    room: {type: Schema.Types.ObjectId, ref: 'Room'},
    user: {type: Schema.Types.ObjectId, ref: 'DeviceUser'},
    
    devmodel: {type: Schema.Types.ObjectId, ref: 'DeviceModel'},
    supply: [{type: Schema.Types.ObjectId, ref: 'Supply' }],
    // Official site
    descriptionUrl: {type: String},

    scanFolder: {type: String, unique: true},
    url: {type: String, unique: true},
    
    serialNumber: {type: String, unique: true},
    invNum: {type: String, required: true, unique: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Device', schema);