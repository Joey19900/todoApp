import React from "react";
import { useState } from "react";
import "./TaskFilterButtons.css";

function TaskFilterButtons({ setFilterStatus, tasks, handleClearTask }) {
  const itemLeft = tasks.length;

  const [currFilter, setCurrFilter] = useState("");

  const changeFilter = (filter) => {
    setCurrFilter(filter);
    setFilterStatus(filter);
  };

  const statusFilter = {
    all: "All",
    complete: "Complete",
    active: "Active",
  };

  return (
    <div className="buttonsFilter">
      <p className="Itemleft">Item Left {itemLeft}</p>
      <div className="buttonFilterStatus">
        <button
          className={`button ${
            currFilter === statusFilter.all ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.all)}
        >
          {statusFilter.all}
        </button>
        <button
          className={`button ${
            currFilter === statusFilter.complete ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.complete)}
        >
          {statusFilter.complete}
        </button>
        <button
          className={`button ${
            currFilter === statusFilter.active ? "active" : ""
          }`}
          onClick={() => changeFilter(statusFilter.active)}
        >
          {statusFilter.active}
        </button>
      </div>
      <button
        className="button"
        onClick={() => handleClearTask("Clear Complete")}
      >
        <p className="text">Clear Complete</p>
      </button>
    </div>
  );
}

export default TaskFilterButtons;
