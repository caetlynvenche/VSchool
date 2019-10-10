const express = require("express")
const app = express()




//middleware
app.use(express.json())

app.use("/todos", require("./routes/todoRoute"))

app.listen(5683, () => {
    console.log("Server is running on Port 5683")
})