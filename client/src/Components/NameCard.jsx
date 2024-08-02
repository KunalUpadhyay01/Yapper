import React,{useState} from 'react'
import Input from "./Input"
const NameCard = () => {
  const [text,setText] = useState('')
  return (
    <div>
      <Input type='text' id ='messageInput' classname='messageInput' value={text} onChange={e=> setText(e.target.value)} placeholder='Enter message'/>
    </div>
  )
}

export default NameCard
