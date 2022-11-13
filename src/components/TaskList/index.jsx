import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const AddTask = (task) => {
    console.log("tarea agregada");
    console.log(tasks);
  };

  return (
    <>
      <TaskForm />
      <div className="task-list-container">Task list</div>
      {tasks.map((task) => (
        <TaskItem text={task.text} finish={task.finish} />
      ))}
    </>
  );
}
export default TaskList;
