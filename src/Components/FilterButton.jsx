import React from "react";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="text-white p-2 w-1/5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="hidden">Show </span>
      <span>{props.name}</span>
      <span className="hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;
