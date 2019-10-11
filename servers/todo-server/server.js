const express = require("express")
const app = express()
const morgan = require("morgan")


//middleware
app.use(express.json())

app.use("/todos", require("./routes/todoRoute"))
app.use(morgan("dev"))

app.listen(5683, () => {
    console.log("Server is running on Port 5683")
})