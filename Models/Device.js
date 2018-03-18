/*jshint esversion: 6*/
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../Configuration');
var conn = mongoose.createConnection(config.database);

var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        required: true,
        default: 0
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = conn.model('Device', DeviceSchema);