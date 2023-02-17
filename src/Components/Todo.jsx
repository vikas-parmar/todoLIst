import React from 'react'

const Todo = (props) => {
  return (
    <li className="todo">
    <div>
      <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
      <label className="todo-label" htmlFor="todo-0">
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="todo-input-btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button type="button" className="todo-input-btn">
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </li>
  )
}

export default Todo;