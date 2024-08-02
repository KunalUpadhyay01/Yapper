import React from 'react'
import Logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth'
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth');

  }
  return (
    <div className='Navbar'>
      <NavLink to='/' className='navComponent'><img src={Logo} alt='logo' /></NavLink>
      {
        auth.user ? (<>
          <NavLink to='/signin'onClick={handleLogout} className='register navComponent'>
          Logout
          </NavLink>
        </>)
          : (window.location.href==='http://localhost:3000/signin'? (<NavLink to='/register'className='register navComponent'>
                
                </NavLink>) : <NavLink to='/signin'className='register navComponent'>
                
                </NavLink>)}
      

    </div>
  )
}

export default Navbar
