import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/actions';
import "../styles/TaskListItem.css"

const TaskListItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask(task.id, editedTitle, editedDescription));
    setIsEditing(false);
  };

  const handleChange = e => {
    if (e.target.name === 'title') {
      setEditedTitle(e.target.value);
    } else {
      setEditedDescription(e.target.value);
    }
  };

  return (
    <div className="task-item">
      <input type="checkbox" />
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTitle}
            onChange={handleChange}
          />
          {/* <input
            type="text"
            name="description"
            value={editedDescription}
            onChange={handleChange}
          /> */}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskListItem;
