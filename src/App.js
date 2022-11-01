import React from "react";
import "./App.css";
import taskForm from "./taskForm";

function App() {
  return (
    <div className="todoApp">
      <div className="top-botton"></div>

      <div className="task-list-main">
        <h1> My to-do </h1>
        <taskForm />
      </div>
    </div>
  );
}

export default App;
