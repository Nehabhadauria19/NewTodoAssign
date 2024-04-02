// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import "../styles/TaskForm.css"

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <>
    
    <form onSubmit={handleSubmit} className="task-form">
        <h2>Add task</h2>
      <div className="input-group">
        <label>Enter Task Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task title"
          required // Adding required attribute for validation
        />
      </div>
      <div className="input-group">
        <label>Enter Task Description:</label>
        <input className='desc'
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter task description"
         
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
    </>
  );
};

export default TaskForm;
