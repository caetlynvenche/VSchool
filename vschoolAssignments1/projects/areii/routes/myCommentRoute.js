const express = require("express")
const myCommentRouter = express.Router()
const MyComment = require("../models/commentSchema")


myCommentRouter.post("/:_id", (req, res, next) => {
    const newComment = new MyComment(req.body)

    newComment.postId = req.params._id
    newComment.username = req.user.username
    newComment.date = new Date

    newComment.save((err, newComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newComment)
    })
})

myCommentRouter.delete("/:_id", (req, res, next) => {
    MyComment.findByIdAndRemove({_id: req.params._id },
        (err, post) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send("successfully deleted")
        })
})

module.exports = myCommentRouter