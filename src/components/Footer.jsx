import React from 'react';
import TasksFilter from './TasksFilter';

function Footer( { onFilterChange, filterTask, count, onClearCompleted } ) {
    

  return (
    <div className='footer'>
        <span className='todo-count'>{`${count} items left`}</span>
            <ul className='filters'>

               <TasksFilter filterTask={filterTask} onFilterChange={onFilterChange}/>
               
            </ul>
        <button className='clear-completed' onClick={onClearCompleted()}>Clear completed</button>    
    </div>
  )
}


export default Footer