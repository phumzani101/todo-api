const express = require('express')
const Todo = require('../model/todo.model')

const Router = express.Router()

Router.get('/', (req, res) => {
    Todo.find().then((todos) => {
        res.json({todos})
    }, (e) => {
        res.status(400).json({error: e.message})
    })
})

Router.post('/', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.json(doc)
    }, (e) => {
        res.status(400).send({error: e})
    })

})

module.exports = Router