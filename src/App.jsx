import { useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./Components/FilterButton";
import Form from "./Components/Form";
import Todo from "./Components/Todo"

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map((task)=>{
      if(id === task.id){
        return{...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updateTasks);
  }
  
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
     setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  
  const taskList = tasks.map((task) => (
                              <Todo 
                                id={task.id} 
                                name={task.name} 
                                completed={task.completed} 
                                key={task.id}
                                toggleTaskCompleted={toggleTaskCompleted}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                />));

  const filterList = FILTER_NAMES.map((name)=>(
    <FilterButton 
      key={name} 
      name={name}
      isPressed ={name === filter}
      setFilter= {setFilter} 
      />
  ));
  
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }


  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining!!`;

  return (
    <div className="todo--app">
    <h1>TodoMatic</h1>
    
    <Form addTask={addTask} />

    {filterList}

    <h2 id="list-heading">{headingText}</h2>
    
    <ul
      role="list"
      className="todo-list"
      aria-labelledby="list-heading">
        {taskList}
    </ul>
  </div>
  )
}

export default App;
