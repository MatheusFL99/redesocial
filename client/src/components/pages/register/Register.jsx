import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'

export default function Register() {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/login`
    navigate(path)
  }

  const handleClick = async e => {
    e.preventDefault()
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity('As senhas não correspondem!')
    } else {
      try {
        await axios({
          method: 'post',
          responseType: 'json',
          url: 'http://localhost:3001/api/users/register',
          data: {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword: confirmPassword.current.value
          }
        })
        alert('Registrado com sucesso!')
        routeChange()
      } catch (err) {
        alert(err.response.data)
      }
    }
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
          <form className="register-box" onSubmit={handleClick}>
            <input
              placeholder="Nome de usuário"
              type="text"
              required
              ref={name}
              className="register-input"
            />
            <input
              placeholder="Email"
              className="register-input"
              required
              ref={email}
              type="email"
            />
            <input
              type="password"
              placeholder="Senha"
              required
              ref={password}
              className="register-input"
            />
            <input
              type="password"
              ref={confirmPassword}
              required
              placeholder="Confirmar Senha"
              className="register-input"
            />
            <button className="register-button" type="submit">
              Registrar
            </button>

            <button className="register-register-button" onClick={routeChange}>
              Entrar em sua conta
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
