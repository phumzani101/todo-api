const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    }
})

module.exports = mongoose.model('User', UserSchema)