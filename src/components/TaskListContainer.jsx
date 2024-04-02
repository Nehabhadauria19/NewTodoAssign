// TaskListContainer.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskList from '../components/TaskList';
import { fetchTasks } from '../redux/actions';
import "../styles/TaskListContainer.css";

const TaskListContainer = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all'); // State to track filter

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  return (
    <>
      <h2 className='head'>To do tasks</h2>
      <div className="task-list-container">
        <div className="filter-buttons">
          <button onClick={() => handleFilter('active')}>Active</button>
          <button onClick={() => handleFilter('completed')}>Completed</button>
          <button onClick={() => handleFilter('all')}>All</button>
        </div>
        <TaskList filter={filter} />
      </div>
    </>
  );
};

export default TaskListContainer;
