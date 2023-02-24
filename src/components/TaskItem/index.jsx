import React from "react";
import "./TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import PropTypes from "prop-types";

function TaskItem({ id, text, isDone, handleDeleteTask, handleCompleteTask }) {
  return (
    <div className={isDone ? "task-container finish" : "task-container"}>
      <div className="task-container-icons">
        <input
          checked={isDone}
          onClick={() => handleCompleteTask(id)}
          type="checkbox"
          className="task-icon"
        />
      </div>

      <div className="task-text">{text}</div>

      <div
        className="task-container-icons"
        onClick={() => handleDeleteTask(id)}
      >
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
