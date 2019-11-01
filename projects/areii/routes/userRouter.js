const express = require("express")
const userRouter = express.Router()
const User = require("../models/postSchema")

userRouter.get("/:username", (req, res, next) => {
    User.find({ username: req.params.username}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})

module.exports = userRouter

//make get /${user}