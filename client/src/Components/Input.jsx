import React from 'react'

const Input = (
    {
        type = '',
        require = false,
        className = '',
        placeholder = '',
        label = '',
        name = '',
        id = '',
        value='',
        labelName='',
        onClick = function(){},
        onChange = function(){},
        autoFocus = false,
    }
) => {

  return (
    <div>
    <label className={labelName}>{label}</label>
    <input autoFocus={autoFocus} type={type} id={id} required={require} placeholder={placeholder} onClick={onClick} onChange = {onChange} value={value} name={name} className={className}/>
    </div>
  )
}

export default Input
