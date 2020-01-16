const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')


const User = require('./model/user.model')

// Router
const todoRouter = require('./routes/todo.routes')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/todos', todoRouter)

app.listen(PORT, () => {
    console.log('Started on port ' + PORT)
})

module.exports = {app}