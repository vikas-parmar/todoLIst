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
  return (
    <div className="todo--app">
    <h1>TodoMatic</h1>
    
    <Form />

    <div className="filters-btn-group">
      <button type="button" className="toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>All</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="toggle-btn" aria-pressed="false">
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>

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

export default App
