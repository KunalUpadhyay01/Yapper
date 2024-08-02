import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import { useAuth } from '../context/auth'
import Login from './Login'
const Home = () => {
  const [auth] = useAuth();
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
