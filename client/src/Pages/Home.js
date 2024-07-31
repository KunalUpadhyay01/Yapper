import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Login from './Login'
const Home = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()
  return (<>
    {
      !auth.user ? <Login />:(
    <div className='homePage'>
        <Navbar/>
        <div className='section'>
        <Sidebar />
        <Chat />
        </div>
    </div>)
  }
  </>
    
  )
}

export default Home
