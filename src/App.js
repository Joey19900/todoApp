import React from "react";
import "./App.css";
import mountain from "./assets/images/montain.jpg";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilterButtons from "./components/TaskFilterButtons";
import mountainMobile from "./assets/images/bg-mobile-light.jpg";

function App() {
  return (
    <div className="todoApp">
      <div className="image-background-container">
        <img
          sizes="(max-width: 375px) 375px,
          1440px"
          srcSet={`${mountainMobile} 375w, ${mountain} 1440w`}
          className="top-landscape"
          src={mountain}
        />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
