const mongoose = require('mongoose');

const HelpSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    id_user: {
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

mongoose.model('Help', HelpSchema);