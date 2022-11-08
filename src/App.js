import React from 'react';
import './App.css';

import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='todoApp'>
      <div className='top-botton'></div>

      <div className='task-list-main'>
        <h1> My to-do </h1>

        <TaskItem />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
