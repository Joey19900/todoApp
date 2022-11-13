import React from "react";
import "./TaskForm.css";
import { useState } from "react";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  /*tests*/
  const handleSend = (e) => {
    const newTask = {
      id: "34545",
      text: "hi",
    };
  };

  return (
    <form className="taskForm">
      <input
        className="task-input"
        type="text"
        placeholder="Add new task "
        name="text"
        onChange={handleChange}
      />
      <button className="Task-button">Add Task</button>
    </form>
  );
}
export default TaskForm;
