import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
const Home = () => {
  return (
    <div className='homePage'>
        <Navbar/>
        <div className='section'>
        <Sidebar />
        <Chat />
        </div>
    </div>
  )
}

export default Home
