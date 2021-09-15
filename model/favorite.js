const mongoose = require('mongoose')
const Schema = mongoose.Schema

const likeSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    likes: {
        type: Number
    }
})

module.exports = mongoose.model('Likes', likeSchema) 