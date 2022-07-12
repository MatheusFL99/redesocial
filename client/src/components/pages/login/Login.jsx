import React, { useRef, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router'
import './login.css'

export default function Login() {
  const email = useRef()
  const password = useRef()
  const { isFetching } = useContext(AuthContext)

  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/register`
    navigate(path)
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios({
        method: 'post',
        responseType: 'json',
        url: 'http://localhost:3001/api/users/login',
        data: {
          email: email.current.value,
          password: password.current.value
        }
      })
      alert('Logado com sucesso!')
      routeChange()
    } catch (err) {
      alert(err.response.data)
    }
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
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Email"
              className="login-input"
              type="email"
              ref={email}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              className="login-input"
              ref={password}
            />
            <button
              className="login-button"
              type="submit"
              disabled={isFetching}
            >
              {' '}
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                'Entrar'
              )}
            </button>
            <span className="login-forgot">Esqueceu sua senha?</span>
            <button className="login-register-button" onClick={routeChange}>
              {' '}
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                'Criar nova conta'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
