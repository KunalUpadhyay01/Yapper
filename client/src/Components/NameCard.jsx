import React,{useState} from 'react'
import Input from "./Input"
import axios from 'axios'
const NameCard = () => {
  const [text,setText] = useState('')
  async function getName(){
    await axios.get('http://locahost:4000/')
  }
  return (
    <div>
      <Input type='text' id ='messageInput' classname='messageInput' value={text} onChange={e=> setText(e.target.value)} placeholder='Enter message'/>
    </div>
  )
}

export default NameCard
