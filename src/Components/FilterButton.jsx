import React from 'react'

const FilterButton = () => {
  return (
    <div className="filters-btn-group">
      <button type="button" className="toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>All</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    </div>
  )
}

export default FilterButton;