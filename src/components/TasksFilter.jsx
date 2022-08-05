import React from 'react'

let buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'},
  ]

function TasksFilter ( {  onFilterChange, filterTask } ) {
 
 
    
  const taskFilterButtons = buttons.map(( { name, label } ) => {
        const isActive = filterTask === name;
        return (
            <li key={name}>
            <button className={isActive  ? 'selected' : ''} onClick={onFilterChange(name)} >
              {label}
            </button>
        </li>

            )
}) 

  return (
    <>
        {taskFilterButtons}
    </>
  )
}

export default TasksFilter