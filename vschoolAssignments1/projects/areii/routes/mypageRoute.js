const express = require("express")
const mypageRouter = express.Router()
const MyPage = require("../models/postSchema")

mypageRouter.get("/", (req, res, next) => {
    MyPage.find({ user: req.user._id }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(post)
    })
})

mypageRouter.get("/:_id", (req, res, next) => {
    MyPage.find({ _id: req.params._id, user: req.user._id }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(post)
    })
})

mypageRouter.post("/", (req, res, next) => {
    const newPost = new MyPage(req.body)

    newPost.user = req.user._id
    newPost.date = new Date()
    newPost.username = req.user.username

    newPost.save((err, newPost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newPost)
    })
})

mypageRouter.delete("/:_id", (req, res, next) => {
    MyPage.findByIdAndRemove({ _id: req.params._id, user: req.user._id }, (err, post) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("successfully deleted")
    })
})

mypageRouter.put("/:_id", (req, res, next) => {
    MyPage.findByIdAndUpdate(
        {_id: req.params._id, user: req.user._id},
        req.body,
        { new: true },
        (err, post) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(post)
        }
    )
})

module.exports = mypageRouter
