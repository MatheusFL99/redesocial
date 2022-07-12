import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/pages/register/Register'
import Login from './components/pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
