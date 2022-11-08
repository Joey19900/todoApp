import React from 'react';
import TaskForm from '../TaskForm';
import './TaskList.css';
import { useState } from 'react';

function TaskList() {
  const [task, setTask] = useState([]);

  return (
    <>
      <div className='task-list-container'>Task list</div>
      <TaskForm />
    </>
  );
}
export default TaskList;
