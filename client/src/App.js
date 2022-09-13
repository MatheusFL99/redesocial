import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/pages/register/Register'
import Login from './components/pages/login/Login'
import { UserProvider } from './context/UserContext'
import ProtectedRoutes from './ProtectedRoutes'
import Message from './components/message/Message'
import Profile from './components/pages/user/Profile'

function App() {
  return (
    <Router>
      <UserProvider>
        <Message />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
