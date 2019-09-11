const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
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

module.exports = model('User', UserSchema);