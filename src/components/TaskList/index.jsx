import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const AddTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => tasks.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <>
      <TaskForm onSubmit={AddTask} />
      <div className="task-list-container"></div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          finish={task.finish}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}
export default TaskList;
