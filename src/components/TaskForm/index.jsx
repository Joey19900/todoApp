import React from "react";
import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    const newTask = {
      id: uuidv4(),
      text: input,
      finish: false,
    };
    //Continuar desarrollando mi funcionalidad a partir de esta linea
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
      <button onClick={handleSend} className="Task-button">
        Add Task
      </button>
    </form>
  );
}
export default TaskForm;
