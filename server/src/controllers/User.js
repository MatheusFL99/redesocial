const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  async test(req, res) {
    res.status(200).json('Funcionando!')
  },
  async register(req, res) {
    const { name, email, password, confirmpassword } = req.body

    // validações
    if (!name) {
      return res.status(422).json('O nome é obrigatório!')
    }

    if (!email) {
      return res.status(422).json('O email é obrigatório!')
    }

    if (!password) {
      return res.status(422).json('A senha é obrigatório')
    }

    if (password != confirmpassword) {
      return res
        .status(422)
        .json('A senha e a confirmação precisam ser iguais!')
    }

    const userExists = await User.findOne({ email: email })

    if (userExists) {
      return res.status(422).json('Esse email já está sendo utilizado!')
    }

    // cria senha criptografada com bcrypt
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      email,
      password: passwordHash
    })

    try {
      await user.save()
      res.status(201).json('Usuario criado com sucesso!')
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async login(req, res) {
    const { email, password } = req.body

    // validações
    if (!email) {
      return res.status(422).json('O email é obrigatório!')
    }

    if (!password) {
      return res.status(422).json('A senha é obrigatória!')
    }

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(404).json('Usuário não encontrado!')
    }

    const checkpassword = await bcrypt.compare(password, user.password)

    if (!checkpassword) {
      return res.status(422).json('Senha inválida')
    }

    try {
      const secret = process.env.SECRET

      const token = jwt.sign(
        {
          id: user._id
        },
        secret
      )

      res
        .status(200)
        .json({ msg: 'Autenticação realizada com sucesso!', token })
    } catch (error) {
      res.status(500).json({ msg: error })
    }
  },
  async checkuser(req, res) {
    const id = req.params.id

    const user = await User.findById(id, '-password')

    if (!user) {
      return res.status(404).json({ msg: 'Usuário não encontrado!' })
    }

    res.status(200).json({ user })
  },
  async update(req, res) {
    const user = await User.findById(req.params.id)

    if (!user) {
      res.status(400).json('Usuário não existe!')
    }

    // alterando valores do usuario no banco de dados
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    try {
      const updateUser = await user.save()
      res.status(201).json(updateUser)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
