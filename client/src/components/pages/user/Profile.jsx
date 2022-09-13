import './profile.css'
import '../../form/Form.css'
import Input from '../../form/Input'
import { useState } from 'react'
import Topbar from '../../top-bar/Topbar'
import { useEffect } from 'react'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'

const Profile = () => {
  const [user, setUser] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api.get('/api/users/checkuser', token).then(response => {
      setUser(response.data)
    })
  }, [token])

  const onFileChange = e => {
    setUser({ ...user, [e.target.name]: e.target.files[0] })
  }
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let msgType = 'sucess'

    const formData = new FormData()

    await Object.keys(user).forEach(key => {
      formData.append(key, user[key])
    })

    const data = await api
      .patch(`/api/users/edit/${user._id}`, formData, token)
      .then(response => {
        return response.data
      })
      .catch(err => {
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  return (
    <>
      <Topbar />
      <div className="profile_header">
        <h1>Perfil</h1>
        <p>Preview imagem</p>
      </div>
      <form onSubmit={handleSubmit} className="form_container">
        <Input
          text="imagem"
          type="file"
          name="image"
          hamdleOnChange={onFileChange}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          value={user.name || ''}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
          value={user.email || ''}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Editar" />
      </form>
    </>
  )
}

export default Profile
