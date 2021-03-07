const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    admission: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

const School = mongoose.model('school', schoolSchema);
module.exports = School;