const express = require("express")
const feedRouter = express.Router()
const Feed = require("../models/postSchema")

feedRouter.get("/", (req, res, next) => {
    Feed.find((err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(post)
    })
})

feedRouter.get("/:username", (req, res, next) => {
    Feed.find({ username: req.params.username }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(post)
    })
})

module.exports = feedRouter