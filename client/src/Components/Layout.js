import React from 'react'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <div className='homePage'>
      <Navbar />
      <main style={{position:'relative'}}>{children}</main>
    </div>

  )
}

export default Layout
