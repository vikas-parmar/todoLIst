import React, {useState} from 'react'



const Form = (props) => {
    const [name, setName] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
          props.addTask(name);
          setName("");
        }};

    function handleChange(e) {
        setName(e.target.value);
      };
          
  return (
    <form onSubmit={handleSubmit} className='todo--form'>
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
        placeholder="Add Your ToDos"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn--primary">
        Add
      </button>
    </form>
  )
}

export default Form;