import React from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskAdd from "./Task";
import TaskList from "./TaskList";
function App() {
  return (
    <div className="todoApp">
      <div className="top-botton"></div>

      <div className="task-list-main">
        <h1> My to-do </h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
