import { Link } from 'react-router-dom'
import Input from '../../form/Input'
import { useState, useContext } from 'react'
import { Context } from '../../../context/UserContext'
import './register.css'

export default function Register() {
  const [user, setUser] = useState({})
  const { register } = useContext(Context)
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // enviar usuario para o banco
    register(user)
  }

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">Práticas A</h3>
          <span className="register-desc">
            Crie uma conta para poder se conectar!
          </span>
        </div>
        <div className="register-right">
          <form className="register-box" onSubmit={handleSubmit}>
            <Input
              text="Nome"
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              className="register-input"
              handleOnChange={handleChange}
            />
            <Input
              text="E-mail"
              type="email"
              name="email"
              placeholder="Digite o seu email"
              className="register-input"
              handleOnChange={handleChange}
            />
            <Input
              text="Senha"
              type="password"
              name="password"
              placeholder="Digite a sua senha"
              className="register-input"
              handleOnChange={handleChange}
            />
            <Input
              text="Confirmação de Senha"
              type="password"
              name="confirmpassword"
              placeholder="Comfirme a sua senha"
              className="register-input"
              handleOnChange={handleChange}
            />
            <input
              type="submit"
              value="Cadastrar"
              className="register-button"
            />

            <Link to="/login">
              <button className="register-register-button">
                Já possuo conta
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
