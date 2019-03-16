const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    transcription: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    removable: {
        type: Boolean,
        default: false
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('word', wordSchema);