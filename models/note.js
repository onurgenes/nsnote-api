const mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    owner: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    detail: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = {Note}