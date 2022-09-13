const { findById } = require('../models/Post')
const ObjectId = require('mongoose').Types.ObjectId.isValid
const Post = require('../models/Post')


module.exports = class Posts {
  static async createPost(req,res){
    const {desc} = req.body

    if (req.file){
      post.image = req.file.filename
    }

    //VALIDAÇÕES
    if(!desc){
      res.status(422).json({message: 'A postagem não pode estar vazia'})
    }

    // pegar token do usuario
    const token = getToken(req)
    const user = await getUserByToken(token)

    const post = new Post({
      desc,
      image,
      likes: [],
      user:{
        _id: user.id,
        name: user.name,
        image: user.image
      }
    })
    try{
      const newPost = await post.save()
      res.status(201).json({message: 'Postagem criada com sucesso!', newPost})
    } catch (err){
      res.status(500).json({message: err})
    }
  }

  /////////////////////// RECEBER TODAS AS POSTAGENS
  static async getAllPosts(req,res){
    const posts = await Post.find({}).sort('timestamp')
    res.send(posts)
  }

  ////////////////////// RECEBER POSTAGEM PELO ID
  static async getPostById(req,res){
    const id = req.params.id

    // verifica se o ID é valido
    if (!ObjectId(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // validar se a postagem existe
    const post = await Post.findOne({ _id: id })
    if (!post) {
      res.status(404).json({ message: 'Postagem não encontrado!' })
      return
    }

    res.status(200).json({post})
  }

  //////////////////////// DELETAR POSTAGEM
  static async removePost(req,res){
    const id = req.params.id

    // verificar se o ID é válido
    if (!ObjectId(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // validar se o post existe
    const post = await Post.findOne({_id: id})
    if(!post){
      res.status(404).json({message: 'Postagem inexistente'})
      return
    }

    // verificar se a request vem do usuario que criou a postagem
    const token = getToken(req)
    const user = await getUserByToken(token)
    const userId = user._id.toString()
    if (post.user._id !== userId) {
      res
        .status(422)
        .json({ message: 'Houve um problema ao processar sua solicitação.' })
      return
    }

    try{
      await Post.findByIdAndDelete(id)
      res.status(200).json({message: 'Postagem deletada com sucesso!'})
      return
    } catch(err){
      res.status(422).json({message: err})
      return
    }
  }

  static async likePost(req,res){
    const id = req.params.id

    // verificar se o ID é válido
    if (!ObjectId(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // validar se o post existe
    const post = await Post.findOne({_id: id})
    if(!post){
      res.status(404).json({message: 'Postagem inexistente'})
      return
    }

    const token = getToken(req)
    const user = await getUserByToken(token)
    const userId = user._id.toString()
    try{
      if (!post.likes.includes(userId)){
        await post.updateOne({$push: {likes: userId}})
        res.status(200).json({message: 'Você curtiu essa postagem!'})
      } else {
        await post.updateOne({$pull: {likes: userId}})
        res.status(200).json({message: 'Você removeu sua curtida dessa postagem'})
      } 
    } catch(err){
      res.status(422).json({message: err})
    }

  }
}
