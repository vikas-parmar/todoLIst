import React from 'react'

const Todo = (props) => {
  return (
    <li className="todo">
    <div>
      <input 
        id={props.id} 
        type="checkbox" 
        defaultChecked={props.completed} 
        onChange={ () =>{
          props.toggleTaskCompleted(props.id)
        }}
        />
      <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="todo-input-btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button 
        type="button" 
        className="todo-input-btn"
        onClick={() => props.deleteTask(props.id)}
        >
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </li>
  )
}

export default Todo;