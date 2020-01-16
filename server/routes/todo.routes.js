const express = require('express')
const Todo = require('../model/todo.model')

const Router = express.Router()

Router.post('/', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.json(doc)
    }, (e) => {
        res.send({error: e})
    })

})

module.exports = Router