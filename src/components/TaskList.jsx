import React from 'react';
import { useSelector } from 'react-redux';
import TaskListItem from './TaskListItem';

const TaskList = ({ filter }) => {
  const tasks = useSelector(state => state.tasks);

  // Filter tasks based on the selected filter
  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

// Helper function to filter tasks based on the selected filter
const filterTasks = (tasks, filter) => {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export default TaskList;
