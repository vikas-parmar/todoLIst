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
      <li className="todo">
        <div>
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            Jogging
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="todo-input-btn">
            Edit <span className="visually-hidden">Jogging</span>
          </button>
          <button type="button" className="todo-input-btn">
            Delete <span className="visually-hidden">Jogging</span>
          </button>
        </div>
      </li>
      <li className="todo">
        <div>
          <input id="todo-1" type="checkbox" />
          <label className="todo-label" htmlFor="todo-1">
            Cricket
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="todo-input-btn">
            Edit <span className="visually-hidden">Cricket</span>
          </button>
          <button type="button" className="todo-input-btn">
            Delete <span className="visually-hidden">Cricket</span>
          </button>
        </div>
      </li>
      <li className="todo">
        <div>
          <input id="todo-2" type="checkbox" />
          <label className="todo-label" htmlFor="todo-2">
            Sleep
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="todo-input-btn">
            Edit <span className="visually-hidden">Sleep</span>
          </button>
          <button type="button" className="todo-input-btn">
            Delete <span className="visually-hidden">Sleep</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default App
