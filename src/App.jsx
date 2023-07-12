import { useState, useRef, useEffect } from "react";
import FilterButton from "./Components/FilterButton";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const container = {
  background: "rgb(63,94,251)",
  background:
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(167,70,252,1) 100%)",
};

const wrapper = {
  backgroundColor: "white",
  background: "rgba(  255, 255, 255, 0.65  )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 4px )",
  webkitBackdropFilter: "blur( 4px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining!!`;

  const prevTaskLength = usePrevious(tasks.length);

  const listHeadingRef = useRef(null);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div
      className="w-full px-4 flex flex-col justify-around items-center h-screen"
      style={container}
    >
      <div
        className="container w-1/2 p-4 border-4 border-indigo-500/100"
        style={wrapper}
      >
        <h1 className="text-3xl font-bold text-center text-white">TodoMatic</h1>

        <Form addTask={addTask} />

        <div className="columns-1 flex justify-around">{filterList}</div>

        <h2 className="columns-1 text-center py-2 font-serif text-lg font-bold text-pink-600" id="list-heading" tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul role="list" className="todo-list" aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>
      <a href="https://github.com/vikas-parmar" className="text-white font-serif text-lg">Get back to GitHub!</a>
    </div>
  );
};

export default App;
