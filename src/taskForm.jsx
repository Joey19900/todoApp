import React from "react";

import "./TaskForm.css";

function TaskForm(props) {
  function taskForm() {
    return (
      <form className="taskForm">
        <input
          className="task-input"
          type="text"
          placeholder="Add new task "
          name="text"
        />
        <button className="Task-button">Add Task</button>
      </form>
    );
  }
}
export default TaskForm;
