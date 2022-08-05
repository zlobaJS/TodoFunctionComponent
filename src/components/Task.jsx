import React, { useState } from 'react';
import { setSeconds  } from 'date-fns'


function Task ( { label, onTaskToggle, id, completed, removeTask, editTask, editing, hideTask } ) {

const [labelInput, setLabelInput] = useState(label)

const onChangeEditTask = (e) => {
    const { value } = e.target
    setLabelInput(value)
}

const hideTaskEdit = (e) => {
   e.preventDefault();
   const { length } = labelInput
   if (!length) return;
   hideTask(id)
    
}


  return (
    <li className={completed ? 'completed' : editing ? 'editing' : ''}>
            <div className='view'>
                <input className='toggle' type="checkbox" onClick={onTaskToggle(id)}/>
                <label>
                    <span className='description'>{labelInput}</span>
                    <span className="created">{setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)}</span>
                </label>
             <button className="icon icon-edit" onClick={editTask(id)}></button>
             <button className="icon icon-destroy" onClick={removeTask(id)}></button>
            </div>
            <form onSubmit={hideTaskEdit}> 
            <input 
            type="text" 
            className="edit" 
            value={labelInput} 
            onChange={onChangeEditTask}
            /> 
            </form>          
        </li>
  )
}

export default Task