import React, {useState} from 'react';
import Layout from '../Components/Layout';
import Input from '../Components/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [name, setName] =  useState("")
  const [email, setEmail] =  useState("")
  const [password, setPassword] =  useState("")
  const navigate = useNavigate()
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const res = await axios.post('http://localhost:3001/api/register', {name, email, password})
      if(res.data.success){
        navigate('/signin')
      }
    }
  return (
    <Layout>
        <div className='registerFormContainer'>
            <form className='form' onSubmit={handleSubmit}>
            <h1>Welcome!</h1>
            <p>Register Below</p>
            <Input className="inputComponent" value={name} placeholder='Enter your Username here' label='Username' onChange={e => setName(e.target.value)} type='text' />
            <Input className="inputComponent" placeholder='Enter your Email here' value={email} onChange={e => setEmail(e.target.value)} label='Email' type='email'/>
            <Input className="inputComponent" placeholder='Enter your password here' label='Password' value={password} onChange={e => setPassword(e.target.value)}type='password'/>
            <Input type='submit' className='submit' value="Submit" placeholder='Submit' />
            <p>Already Have an account? <NavLink to='/signin'>Sign in</NavLink></p>
            </form>

        </div>
    </Layout>
  )
}

export default Register;
