const { Schema, model } = require('mongoose');

const HelpSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    iduser:{
        type: String,
        required: true,
    },
    nameuser:{
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Help', HelpSchema);