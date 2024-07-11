import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <NavLink to='/' className='navComponent'><img src={Logo} alt='logo'/></NavLink>
        <NavLink to='/register' className='register navComponent'>
        Register
        Logout
        </NavLink>
    </div>
  )
}

export default Navbar
