const { findById } = require('../models/Post')
const Post = require('../models/Post')

module.exports = {
  async newPost(req, res) {
    const newPost = new Post(req.body)
    try {
      const savedPost = await newPost.save()
      res.status(200).json(savedPost)
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async updatePost(req, res) {
    try {
      const post = await Post.findById(req.params.id)
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body })
        res.status(200).json('Postagem atualizada!')
      } else {
        res.status(403).json('Você só pode alterar suas próprias postagens!')
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async likePost(req, res) {
    try {
      const post = await Post.findById(req.params.id)
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } })
        res.status(200).json('Você curtiu a postagem!')
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } })
        res.status(200).json('Você tirou a curtida da postagem!')
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },

  async getPost(req, res) {
    try {
      const post = await Post.findById(req.params.id)
      res.status(200).json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
