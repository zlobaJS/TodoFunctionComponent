import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
let id = 1;


function App() {

  const [item, setItem] = useState([])
  const [filterTask, setFilterTask] = useState('all')

  const addItem = (text) =>  {
    const newItem = {
      label: text,
      completed: false,
      editing: false,
      id: id++ 
    }
    setItem([...item, newItem])  
  }
  
  const onTaskToggle = (id) => () => {
    setItem([
      ...item.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})
    ])
  }

  const removeTask = (id) => () => {
    setItem ([...item.filter((todo) => todo.id !== id)])
  }

  const editTask = (id) => () => {
    setItem([...item.map((todo) => todo.id === id ? {...todo, editing: !todo.editing} : {...todo})])
  }

  const hideTask = (id) =>  {
    setItem([...item.map((todo) => todo.id === id ? {...todo, editing: !todo.editing} : {...todo})])
  }
  
  const onClearCompleted = () =>  () => { 
    setItem([...item.filter((todo) => todo.completed === false)])

 } 


 const filter = (item, filterTask) => {
   switch(filterTask) {
      case 'all' : return item;
      case 'active' : return item.filter((item) => !item.completed);
      case 'completed' : return item.filter((item) => item.completed)
      default:
        return item;
  }

 }

 const onFilterChange = (filterTask) => () => {
    setFilterTask(filterTask)
}

  const visibleItems = filter(item, filterTask)
  const count = item.filter(el => !el.completed).length


 

  return (
    <div className="todoapp">
        <h1>todos</h1>
        <NewTaskForm addItem={addItem}/>
      <div className="main">
          <TaskList 
          item={visibleItems}
          onTaskToggle={onTaskToggle}
          removeTask={removeTask}
          editTask={editTask}
          hideTask={hideTask}
          />
          <Footer 
          onFilterChange={onFilterChange} 
          filterTask={filterTask}
          count={count}
          onClearCompleted={onClearCompleted}
          />
      </div>
    </div>
  );
}

export default App;
