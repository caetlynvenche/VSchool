const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/commentSchema")

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

commentRouter.get("/:postId", (req, res, next) => {
    Comment.find({ postId: req.params.postId }, (err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

module.exports = commentRouter