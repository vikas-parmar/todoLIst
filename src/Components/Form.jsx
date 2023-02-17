import React from 'react'

const Form = (props) => {
  return (
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
  )
}

export default Form;