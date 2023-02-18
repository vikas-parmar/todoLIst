import React from 'react'

const FilterButton = (props) => {
  return (
    <div className="filters-btn-group">
      <button 
          type="button" 
          className="toggle-btn" 
          aria-pressed={props.isPressed} 
          onClick={() => props.setFilter(props.name)}
        >
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  )
}

export default FilterButton;