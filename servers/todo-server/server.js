const express = require("express")
const app = express()
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

//middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send(todos)
})

app.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete("/:_id", (req, res) => {
    const todoId = req.params._id
    const indexToDel = todos.findIndex(todo => todo._id === todoId)
    todos.splice(indexToDel, 1)
    res.send(`Successfully Deleted Item`)
})

app.put("/:_id", (req, res) => {
    const todoId = req.params._id
    const updateTodos = todos.find(todo => todo._id === todoId)
    const indexToUpdate = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(updateTodos, req.body)
    todos.splice(indexToUpdate, 1, updatedTodo)
    res.send(updatedTodo)
})

app.listen(5683, () => {
    console.log("Server is running on Port 5683")
})