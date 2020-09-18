const express = require("express")
const adminRouter = express.Router()
const Post = require("../models/postSchema")
const Comment = require("../models/commentSchema")
const Auth = require("../models/userSchema")


//users
adminRouter.get("/users", (req, res, next) => {
    Auth.find((err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})

adminRouter.delete("/users/:_id", (req, res, next) => {
    Auth.findByIdAndRemove({ _id: req.params._id }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted user")
    })
})


//posts
adminRouter.get("/posts", (req, res, next) => {
    Post.find((err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(post)
    })
})

adminRouter.delete("/posts/:_id", (req, res, next) => {
    Post.findByIdAndRemove({ _id: req.params._id }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted post")
    })
})

//comments
adminRouter.get("/comments", (req, res, next) => {
    Comment.find((err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

adminRouter.delete("/comments/:_id", (req, res, next) => {
    Comment.findByIdAndRemove({ _id: req.params._id }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted comment")
    })
})

module.exports = adminRouter