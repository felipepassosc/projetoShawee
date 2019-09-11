const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    id_help: {
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

mongoose.model('Answer', AnswerSchema);