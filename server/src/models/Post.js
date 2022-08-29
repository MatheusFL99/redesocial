const mongoose = require('mongoose')

// modelo das postagens no banco de dados
const postSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      max: 500
    },
    img: {
      type: String
    },
    likes: {
      type: Array,
      default: []
    },
    user: Object
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post
