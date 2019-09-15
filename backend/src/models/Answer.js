const { Schema, model } = require('mongoose');

const AnswerSchema = new Schema({
    description: {
        type: String,
        require: true,
    },
    idHelp: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model('Answer', AnswerSchema);