import React from "react";
import "./TaskForm.css";
import { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ handleAddTask }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const counterLetter = input.length;

  const handleSend = (e) => {
    e.preventDefault();

    handleAddTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSend} className="taskForm">
      <input
        value={input}
        className="task-input"
        type="text"
        placeholder="Add new task "
        name="text"
        minLength="3"
        maxLength="30"
        required
        onChange={handleChange}
      />
      <p style={{ color: counterLetter === 30 ? "red" : "black" }}>
        {counterLetter}
      </p>
      <button
        disabled={counterLetter < 3 ? true : false}
        className="Task-button"
      >
        Create new todo
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
