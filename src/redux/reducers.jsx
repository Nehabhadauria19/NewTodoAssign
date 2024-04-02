const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            { id: state.tasks.length + 1, title: action.payload.title }
          ],
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.taskId
              ? { ...task, title: action.payload.newTitle }
              : task
          ),
        };
      case 'FETCH_TASKS':
        // Placeholder for fetching tasks from local storage or API
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;
  