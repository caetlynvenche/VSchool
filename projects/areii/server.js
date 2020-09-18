const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJWT = require("express-jwt")
const PORT = process.env.PORT || 5684
require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/areiidb", 
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: false,
        useUnifiedTopology: true

    }, () => console.log('connected to database'))

//routes
app.use("/api", expressJWT({ secret: process.env.SECRET}))
app.use("/auth", require("./routes/authRoute"))
app.use("/user", require("./routes/userRouter"))
app.use("/feed", require("./routes/feedRoute"))
app.use("/api/mypage", require("./routes/mypageRoute"))
app.use("/comment", require("./routes/commentRoute"))
app.use("/api/comment", require("./routes/myCommentRoute"))
app.use("/api/admin", require("./routes/adminRoute"))

app.use("*", (err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(PORT, () => {
    console.log(PORT)
})