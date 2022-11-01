import React from "react";
import "../styles/taskStyle.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function taskAdd({ text, finish }) {
  return (
    <div className={finish ? "task-conteiner finish" : "task-container "}>
      <div className="task-text">{text}</div>
      <div className="task-container-icons">
        {" "}
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}
export default taskAdd;
