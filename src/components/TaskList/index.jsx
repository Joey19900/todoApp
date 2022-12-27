import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskFilterButtons from "../TaskFilterButtons";

function TaskList() {
  const [tasks, setTasks] = useState([
    // { id: 0, isDone: false, text: "hola" },
    //{ id: 2, isDone: true, text: "bye" },
  ]);
  const [filteredTask, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    handleFilterTask();
  }, [filterStatus, tasks]);

  const handleFilterTask = () => {
    //usar tres condiciones con ayuda de la expresión "if". Priorizar el funcionamiento de complete (Revisar nota en handleDeleteTask)
    if (filterStatus === "Complete") {
      //HINT ESTE ES UN NUEVO ARRAY. SE DEBE UTILIZAR PARA MOSTRAR ÚNICAMENTE LOS OBJETOS DONE

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
    // HINT UTILIZAR COMO EJEMPLO ESTA FUNCIÓN PARA HACER FUNCIONAR EL FILTRO COMPLETE
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isDone: task.id === id ? true : task.isDone,
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
        />
      ))}
      <div>HELLO filter buttons</div>
      <TaskFilterButtons setFilterStatus={setFilterStatus} tasks={tasks} />
    </>
  );
}
export default TaskList;
