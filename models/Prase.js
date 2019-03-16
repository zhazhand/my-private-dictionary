const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phraseSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    removable: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
    ,
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

});

module.exports = mongoose.model('phrase', phraseSchema);