import FilterButton from "./Components/FilterButton";
import Form from "./Components/Form";
import Todo from "./Components/Todo"


function App(props) {
  
  const taskList = props.tasks.map((task) => (
                              <Todo 
                                id={task.id} 
                                name={task.name} 
                                completed={task.completed} 
                                key={task.id}
                                />));
  
  function addTask(name) {
  alert(name);
  }

  return (
    <div className="todo--app">
    <h1>TodoMatic</h1>
    
    <Form addTask={addTask} />

    <FilterButton />
    <FilterButton />
    <FilterButton />

    <h2 id="list-heading">3 tasks remaining</h2>
    
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
