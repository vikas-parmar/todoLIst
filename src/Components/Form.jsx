import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      props.addTask(name);
      setName("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="columns-1 py-2 flex flex-col justify-center items-center"
    >
      <div>
        <input
          type="text"
          id="todo-input"
          name="text"
          autoComplete="off"
          placeholder=" What needs to be done?"
          value={name}
          onChange={handleChange}
          className=" w-96 p-1 outline-0 border-4  border-indigo-500 mx-1"
        />
        <button
          type="submit"
          className="text-white py-2 px-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
