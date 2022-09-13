const router = require('express').Router()
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')
const { imageUpload } = require('../helpers/image-upload')

const verifyToken = require('../helpers/verify-token')



// rotas definidas pra api usuários
router.post('/users/register', UserController.register)
router.post('/users/login', UserController.login)
router.get('/users/checkuser', UserController.checkUser)
router.get('/users/:id', UserController.getUserById)
router.patch(
  '/users/edit/:id',
  verifyToken,
  imageUpload.single('image'),
  UserController.editUser
)

// rotas definidas para api posts
router.post('/posts/newpost', verifyToken, PostController.createPost)
router.get('/posts/posts', PostController.getAllPosts)
router.delete('/posts/:id', verifyToken, PostController.removePost)
router.patch('/posts/:id/like', verifyToken, PostController.likePost)

module.exports = router
