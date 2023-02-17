import Todo from "./Components/Todo"

function App() {

  return (
    <div className="todo--app">
    <h1>TodoMatic</h1>
    
    <form className='todo--form'>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" >
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn--primary">
        Add
      </button>
    </form>

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
     <Todo id="todo-0" name="Jogging" completed={true} />
     <Todo id="todo-1" name="Cricket" completed={false} />
     <Todo id="todo-2" name="Sleep" completed={false} />
    </ul>
  </div>
  )
}

export default App
