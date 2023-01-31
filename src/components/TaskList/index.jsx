import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskFilterButtons from "../TaskFilterButtons";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTask, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    handleFilterTask();
  }, [filterStatus, tasks]);

  const handleFilterTask = () => {
    if (filterStatus === "Complete") {
      const tasksComplete = tasks.filter((task) => task.isDone === true);
      setFilteredTasks(tasksComplete);
      return;
    }

    if (filterStatus === "Active") {
      const tasksActive = tasks.filter((task) => task.isDone === false);
      setFilteredTasks(tasksActive);
      return;
    }

    if (filterStatus === "All") {
      const tasksAll = tasks;
      setFilteredTasks(tasksAll);
      return;
    }
  };

  const handleAddTask = (text) => {
    const newTask = {
      id: uuidv4(),
      // text: text - cuando una propiedad y un valor tienen el mismo nombre en un objecto, se puede abreviar como se indica abajo
      text,
      isDone: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const result = window.confirm("Are you sure?");

    if (result == true) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    }
  };

  const handleClearTask = () => {
    const result = window.confirm("Are you sure?");
    if (result == true) {
      const updatedTasks = tasks.filter((task) => task.isDone === false);
      setTasks(updatedTasks);
    }
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isDone: task.id === id ? true : task.isDone, // isDone respeta el valor booleano en las demás tareas y solo cambiará la tarea que reciba el click
    }));

    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskForm handleAddTask={handleAddTask} />
      <div className="task-list-container" />
      {filteredTask.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          isDone={task.isDone}
          handleDeleteTask={handleDeleteTask}
          handleCompleteTask={handleCompleteTask}
          handleClearTask={handleClearTask}
        />
      ))}
      <div>HELLO filter buttons</div>
      <TaskFilterButtons
        setFilterStatus={setFilterStatus}
        handleClearTask={handleClearTask}
        tasks={tasks}
      />
    </>
  );
}
export default TaskList;
