import React, { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form className="columns-1 flex justify-between" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <label htmlFor={props.id}>New Name for {props.name}</label>
        <input
          id={props.id}
          className=" w-80 outline-0 border-4  border-indigo-500 mx-1"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="border-b-4 border-pink-500"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="border-b-4 border-indigo-500">
          Save
          <span className="hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="columns-1 flex justify-between">
      <div className="my-1">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="mx-2" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="border-b-4 border-indigo-500"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          Edit <span className="hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="border-b-4 border-pink-500"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;