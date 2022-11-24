import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import TaskItem from "../TaskItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      id: uuidv4(),
      // text: text - cuando una propiedad y un valor tienen el mismo nombre en un objecto, se puede abreviar como se indica abajo
      text,
      isDone: false,
    };

    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    //Continuar desarrollando mi funcionalidad a partir de esta linea y en este componente

    //HINT: La clave para añadir tasks tiene que ver con agregar newTask a 'tasks' por medio de setTasks
  };

  const handleDeleteTask = (id) => {
    //Me preocupa que no entiendas como esta funcionando handleDeleteTask
    // Tener claro que debo saber exactamente como funciona .filter > hacer distintos ejemplos y experimentar para entender
    const updatedTasks = tasks.filter((tasks) => tasks.id !== id);

    //Para poder probar esta funcion de handleDeleteTask, primero tiene que funcionar handleAddTask
    setTasks(updatedTasks);
  };

  return (
    <>
      {/* // Mencionar como esta funcionando aqui  */}
      <TaskForm handleAddTask={handleAddTask} />

      <div className="task-list-container" />

      {/* //Me preocupa que no entiendas como esta funcionando esta parte */}
      {/* //Una vez que funcione handleDeleteTask checar que esto sigue funcionando correctamente */}
      {tasks.map((task) => (
        <TaskItem
          // Para que sirve key?
          key={task.id}
          id={task.id}
          text={task.text}
          isDone={task.isDone}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </>
  );
}

export default TaskList;
