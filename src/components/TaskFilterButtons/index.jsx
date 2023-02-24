import React from "react";
import { useState } from "react";
import "./TaskFilterButtons.css";
import PropTypes from "prop-types";

const statusFilter = {
  all: "All",
  complete: "Complete",
  active: "Active",
};
function TaskFilterButtons({ setFilterStatus, tasks, handleClearTask }) {
  const itemLeft = tasks.length;

  const [currentFilter, setCurrentFilter] = useState("All");

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
    setFilterStatus(filter);
  };

  return (
    <div className="buttonsFilter">
      <p className="Item-Left">Item Left {itemLeft}</p>
      <div className="buttonFilterStatus">
        <button
          className={`button ${
            currentFilter === statusFilter.all ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.all)}
        >
          {statusFilter.all}
        </button>
        <button
          className={`button ${
            currentFilter === statusFilter.complete ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.complete)}
        >
          {statusFilter.complete}
        </button>
        <button
          className={`button ${
            currentFilter === statusFilter.active ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.active)}
        >
          {statusFilter.active}
        </button>
      </div>
      <button
        className="button Item-Right"
        onClick={() => handleClearTask("Clear Complete")}
      >
        Clear Complete
      </button>
    </div>
  );
}

TaskFilterButtons.propTypes = {
  setFilterStatus: PropTypes.func.isRequired,
  handleClearTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
};
export default TaskFilterButtons;
