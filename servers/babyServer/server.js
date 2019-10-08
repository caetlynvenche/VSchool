const express = require('express')
const app = express()


//server route to handle a get request to specific endpoint
app.get("/", (req, res) => {
    res.send({name: "Luna", age: 20})
})


app.get("/unicorns", (req, res) => {
    res.send("Unicorns!!")
})

//make a fake database tomorrow to practice




app.listen(5683, () => {
    console.log("Server is running on Port 5683")
})