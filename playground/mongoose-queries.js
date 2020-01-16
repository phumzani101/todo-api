const mongoose = require('mongoose')

const Todo = require('./../server/model/todo.model')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true, useUnifiedTopology: true })

const id = "5e208d70c23d235f91a79250"

// Todo.find({
//     _id: id
// }).then((result) => {
//     console.log(result)
// })


Todo.findOne({
    _id: id
}).then((result) => {
    console.log(result)
}, (e) => {
    console.log(e.message)
})

Todo.findById(id).then((result) => {
    console.log(result)
}, (e) => {
    console.log(e.message)
})