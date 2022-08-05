import React, { useState } from 'react'

function NewTaskForm( { addItem } ) {
  const [label, setLabel] = useState("")  
    
 const onLabelChange = ({ target : { value } } ) => {
    setLabel(value)   
}

const onSubmit = (e) => {
    e.preventDefault();
    const { length } = label
    if (!length) return false
    addItem(label)
    setLabel('')
}


  return (
    <form onSubmit={onSubmit}>
        <input 
        className='new-todo' 
        placeholder='what needs to be done?' 
        autoFocus
        onChange={onLabelChange}
        value={label}
        />
    </form> 
  )
  
        
}

export default NewTaskForm