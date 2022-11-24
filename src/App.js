import React from "react";
import "./App.css";
import montain from "./assets/images/montain.jpg";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <div className="todoApp">
      <div className="image-background-container">
        <img src={montain} className="top-landscape" />
        <h1>My to-do</h1>
      </div>

      <div className="task-list-main">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
