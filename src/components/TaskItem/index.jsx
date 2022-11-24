import React from "react";
import "./TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

//Me preocupa que no entiendas como esta funcionando TaskItem
function TaskItem({ id, text, isDone, handleAddTask, handleDeleteTask }) {
  return (
    <div className={isDone ? "task-container finish" : "task-container "}>
      {/* // Porque estoy usando una arrow function dentro de onClick? */}
      <div className="task-text" onClick={() => handleAddTask(id)}>
        {text}
      </div>

      <div
        className="task-container-icons"
        /* // Porque estoy usando una arrow function dentro de onClick? */
        onClick={() => handleDeleteTask(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}

export default TaskItem;
