const mongoose = require('mongoose')

// modelo do usuario no banco de dados
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Nome é obrigatório!'
    },
    email: {
      type: String,
      unique: true,
      required: 'Email é obrigatório!'
    },
    password: {
      type: String,
      required: 'Senha é obrigatória!'
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
