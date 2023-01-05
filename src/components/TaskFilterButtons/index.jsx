//NOTAS PARA FUNCIONALIDAD DE FILTROS
//implementar aquí tres botones (all/active/complete)
//Cada boton debe usar la función de setTaskFilter.
//Cada boton debe cambiar el valor inicial a un string "active" "all" "complete"
// Hint USAR UN ARROW FUNCTION PARA AÑADIR LOS STRINGS COMO PARAMETROS

//NOTAS PARA DESARROLLAR CONTADOR DE TAREAS
//Agregar en este componente el contador de tareas y luego estilizarlo para ajsutarlo a la izquierda.
//lA información llega a este componente en forma de props y se puede utilziar para el conteo de tareas

// implementar un boton que permita limpiar las tareas marcadas como completadas

import React from "react";
function TaskFilterButtons({ setFilterStatus, tasks, handleClearTask }) {
  const taskCounter = tasks.length;

  return (
    <div>
      <button onClick={() => setFilterStatus("All")}>All</button>
      <button onClick={() => setFilterStatus("Complete")}>Complete</button>
      <button onClick={() => setFilterStatus("Active")}>Active</button>
      <button onClick={() => handleClearTask("Clear Complete")}>
        Clear Complete
      </button>
      {taskCounter}
    </div>
  );
}

export default TaskFilterButtons;
