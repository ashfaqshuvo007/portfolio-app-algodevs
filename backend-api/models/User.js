const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Setup User Schema
const userSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true

    }

})

//Export User model
const User = module.exports = mongoose.model('user', userSchema)

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
