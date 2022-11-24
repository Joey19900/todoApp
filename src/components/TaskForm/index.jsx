import React from "react";
import "./TaskForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ handleAddTask }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    //Explicar como funcion handleChange

    //Que es e.target.value
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    //Para que sirve e.preventDefault();
    e.preventDefault();

    //Cual es el flujo que se sigue al ejecutar la funcion handleAddTask
    handleAddTask(input);
  };

  //Explicar flujo completo de este componente
  // Que pasa cuando escribo en el input?
  // Que pasa cuando doy click?
  // Porque estoy usando onSubmit y no onClick?
  return (
    <form onSubmit={handleSend} className="taskForm">
      <input
        className="task-input"
        type="text"
        placeholder="Add new task "
        name="text"
        //Por que se usa aqui onChange y no onClick?
        //Cual seria una sintaxis alternativa por medio de arrow function para lograr la misma funcionalidad que existe ahora en handleChange?
        onChange={handleChange}
      />

      <button className="Task-button">Add Task</button>
    </form>
  );
}

export default TaskForm;
