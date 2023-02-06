import React from "react";
import { useState } from "react";
function TaskFilterButtons({ setFilterStatus, tasks, handleClearTask }) {
  const taskCounter = tasks.length;

  return (
    <div>
      <button onClick={() => setFilterStatus("All")}>All</button>
      <button onClick={() => setFilterStatus("Complete")}>Complete</button>
      <button onClick={() => setFilterStatus("Active")}>Active</button>
      <div>
        <button onClick={() => handleClearTask("Clear Complete")}>
          Clear Complete
        </button>
      </div>
      {taskCounter}
    </div>
  );
}
export default TaskFilterButtons;
