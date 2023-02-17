import React from 'react'

const Todo = () => {
  return (
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
  )
}

export default Todo;