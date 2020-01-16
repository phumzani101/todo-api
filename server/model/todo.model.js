const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports = mongoose.model('Todo', TodoSchema)