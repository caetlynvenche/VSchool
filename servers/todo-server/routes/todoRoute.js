const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid/v4")

const todos = [
    {
        name: "write code",
        description: "pretend to know what I am doing",
        imageUrl: "https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        completed: false,
        _id: uuid()
    },
    {
        name: "be excited",
        description: "it is almost time for halloween",
        imageUrl: "https://images.pexels.com/photos/1789541/pexels-photo-1789541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        completed: false,
        _id: uuid()
    },
    {
        name: "rawr",
        description: "who freaking knows",
        imageUrl: "https://images.pexels.com/photos/1096925/pexels-photo-1096925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        completed: false,
        _id: uuid()
    }
]


todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo.completed = false
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(newTodo)
    })

todoRouter.route("/:_id")
    .delete((req, res) => {
        const todoId = req.params._id
        const indexToDel = todos.findIndex(todo => todo._id === todoId)
        todos.splice(indexToDel, 1)
        res.send(`Successfully Deleted Item`)
    })
    .put((req, res) => {
        const todoId = req.params._id
        const updateTodos = todos.find(todo => todo._id === todoId)
        const indexToUpdate = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(updateTodos, req.body)
        todos.splice(indexToUpdate, 1, updatedTodo)
        res.send(updatedTodo)
    })

module.exports = todoRouter