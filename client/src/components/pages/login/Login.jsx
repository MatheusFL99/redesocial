import React, { useContext, useState } from 'react'
import Input from '../../form/Input'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/UserContext'
import './login.css'

export default function Login() {
  const [user, setUser] = useState({})
  const { login } = useContext(Context)

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(user)
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Práticas A</h3>
          <span className="login-desc">
            Utilize suas informações para se conectar!
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleSubmit}>
            <Input
              placeholder="E-mail"
              text="E-mail"
              className="login-input"
              type="email"
              name="email"
              handleOnChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              text="Senha"
              required
              className="login-input"
              handleOnChange={handleChange}
            />
            <input className="login-button" type="submit" value="Entrar" />
            <Link to="/register">
              <button className="login-register-button">
                Ainda não tenho conta
              </button>
            </Link>
            <span className="login-forgot">Esqueceu sua senha?</span>
          </form>
        </div>
      </div>
    </div>
  )
}
