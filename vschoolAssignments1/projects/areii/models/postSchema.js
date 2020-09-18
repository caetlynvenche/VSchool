const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    text: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    hearts: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Post", postSchema)