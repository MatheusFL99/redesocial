const express = require('express')
const userController = require('../controllers/User')
const postController = require('../controllers/Post')
const checkToken = require('../middleware/auth')

const router = express.Router()

// rotas definidas pra api usuários
router.route('/users').get(userController.test)
router.route('/users/register').post(userController.register)
router.route('/users/login').post(userController.login)
router.route('/users/:id/update').put(checkToken, userController.update)
router.route('/users/:id').get(checkToken, userController.checkuser)

// rotas definidas para api posts
router.route('/posts/newpost').post(postController.newPost)
router.route('/posts/:id').put(postController.updatePost)
router.route('/posts/:id').get(postController.getPost)
router.route('/posts/:id/like').put(postController.likePost)

module.exports = router
