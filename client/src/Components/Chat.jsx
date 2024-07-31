import React,{useState, useEffect} from 'react'
import Input from './Input';
import { useAuth } from '../context/auth'
const Chat = () => {

// Use State HOOKS -------------------------------------------------------
  const [text,setText] = useState('')
  const [message,setMessage] = useState('')
  const [auth, setAuth] = useAuth()
// ---------------------- SOCKET IO INITIALIZATRION CLIENT SIDE ---------------------



  //------------------- Onclick Button Function -------------------------------
var array = []
const sendMessage = () =>{
  const Text = document.getElementById('messageInput').value
  setMessage(Text)
  setText('')
}

// ------------------------------------------- Enter Key Function -------------------

useEffect(()=>{
  setAuth({
    ...auth,
  })
  const messageInput = document.getElementById('messageInput');
  messageInput.addEventListener('keydown',(e)=>{
  const button = document.getElementById('sendButton');
    if(e.key==="Enter"){
      button.click()
    }
  })
  
},[])

  return (
    <div className='chatContainer'>
      <main className='chatDisplay' id='chatDisplay'>
        {JSON.stringify(auth,null,4)}
        {message}
      </main>
      <div className="inputContainer">
        <Input type='text' autoFocus={true} id ='messageInput' classname='messageInput' value={text} onChange={e=> setText(e.target.value)} placeholder='Enter message'/>
        <Input type='button' id = 'sendButton' classname='sendButton' onClick={sendMessage} value='Send' />
      </div>
    </div>
  )
}

export default Chat
