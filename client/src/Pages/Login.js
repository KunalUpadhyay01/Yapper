import React, {useState} from 'react';
import Layout from '../Components/Layout';
import Input from '../Components/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
    const handleSubmit = async(e) =>{
      e.preventDefault()
      const res = await axios.post('http://localhost:3001/api/signin',{email,password})
      if(res.data.success){
        navigate('/')
      }else{
        navigate('/signin')
      }
    }
  return (
    <Layout>
        <div className='registerFormContainer'>
            <form className='form' onSubmit={handleSubmit}>
            <h1>Welcome!</h1>
            <p>Sign In</p>
            <Input className="inputComponent" placeholder='Enter your Email here' value={email} onChange={e=>setEmail(e.target.value)}label='Email' type='email'/>
            <Input className="inputComponent" placeholder='Enter your password here' value={password} onChange={e=>setPassword(e.target.value)} label='Password' type='password'/>
            <Input type='submit' className='submit' value='Submit' placeholder='Submit' />
            <p>Don't Have an account? <NavLink to='/register'>Register</NavLink></p>
            </form>

        </div>
    </Layout>
  )
}

export default Login;
