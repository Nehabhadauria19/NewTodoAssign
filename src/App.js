import React from 'react';
import TaskForm from './components/TaskForm';
import TaskListContainer from './components/TaskListContainer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="left-side">
        <TaskForm />
      </div>
      <div className="right-side">
        <TaskListContainer />
      </div>
    </div>
  );
};

export default App;
