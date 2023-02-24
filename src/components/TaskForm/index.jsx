import React from "react";
import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ handleAddTask }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const counterLetter = input.length;

  const handleSend = (e) => {
    e.preventDefault();

    handleAddTask(input);
  };

  return (
    <form onSubmit={handleSend} className="taskForm">
      <p style={{ color: counterLetter === 30 ? "red" : "black" }}>
        {counterLetter}
      </p>
      <input
        className="task-input"
        type="text"
        placeholder="Add new task "
        name="text"
        minLength="3"
        maxLength="30"
        required
        onChange={handleChange}
      />
      <button className="Task-button">Create new todo</button>
    </form>
  );
}

export default TaskForm;
