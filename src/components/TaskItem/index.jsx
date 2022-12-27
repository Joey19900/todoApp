import React from "react";
import "./TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";

//Me preocupa que no entiendas como esta funcionando TaskItem
function TaskItem({
  id,
  text,
  isDone,
  handleAddTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  return (
    <div className={isDone ? "task-container finish" : "task-container "}>
      <div
        className="task-container-icons"
        onClick={() => handleCompleteTask(id)}
      >
        <BiCheckbox className="task-icon" />
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
