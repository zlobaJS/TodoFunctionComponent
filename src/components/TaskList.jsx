import React from 'react'
import Task from './Task';

function TaskList( { item, onTaskToggle, removeTask, editTask, hideTask } ) {
   


  return (

    <ul className='todo-list'>
        { item.map(item => {
        
            const {...itemProps} = item
            return <Task 
            key={item.id} 
            {...itemProps}
            onTaskToggle={onTaskToggle}
            removeTask={removeTask}
            editTask={editTask}
            hideTask={hideTask}
            />
        }) }
    </ul>
                                
  )
}

export default TaskList