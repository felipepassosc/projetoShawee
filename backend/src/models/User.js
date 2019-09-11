const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    bio: {
        type: String,
        require: false,
    },
    likes: [{
        type: Schema.Types.ObjectId,
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
    }],
});

mongoose.model('User', UserSchema);