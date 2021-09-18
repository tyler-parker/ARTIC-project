const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
    likes: {
        type: Number
    }
})

module.exports = mongoose.model('Likes', likeSchema)  