const express = require("express")
const app = express()



app.use(express.json())

app.use("/bounty", require("./routes/bountyRoute"))


app.listen(5683, () => {
    console.log("Server running on 5683")
})