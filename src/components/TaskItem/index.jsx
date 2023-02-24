import React from "react";
import "./TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";
function TaskItem({
  id,
  text,
  isDone,
  handleAddTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  return (
    <div className={isDone ? "task-container finish" : "task-container"}>
      <div
        className="task-container-icons"
        onClick={() => handleCompleteTask(id)}
      >
        <input type="checkbox" className="task-icon" />
      </div>

      <div className="task-text" onClick={() => handleAddTask(id)}>
        {text}
      </div>

      <div
        className="task-container-icons"
        onClick={() => handleDeleteTask(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}

export default TaskItem;
