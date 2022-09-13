import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import Register from './components/pages/register/Register'
import { Context } from './context/UserContext'

const ProtectedRoutes = () => {
  const { authenticated } = useContext(Context)
  return authenticated ? <Outlet /> : <Register />
}

export default ProtectedRoutes
