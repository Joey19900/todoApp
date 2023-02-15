import React from "react";
import { useState } from "react";
import "./TaskFilterButtons.css";
function TaskFilterButtons({ setFilterStatus, tasks, handleClearTask }) {
  const itemLeft = tasks.length;

  return (
    <div className="buttonsFilter">
      <p className="text">Item Left {itemLeft}</p>
      <button className="button" onClick={() => setFilterStatus("All")}>
        <p className="text">All</p>
      </button>
      <button className="button" onClick={() => setFilterStatus("Complete")}>
        <p className="text">Complete</p>
      </button>
      <button className="button" onClick={() => setFilterStatus("Active")}>
        <p className="text">Active</p>
      </button>
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
