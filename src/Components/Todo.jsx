import React, { useState } from 'react'

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New Name for {props.name} :
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          // value={newName}
          // onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="todo-input-btn"
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="todo-input-btn">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="todo-input-btn"
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="todo-input-btn"
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
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