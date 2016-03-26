export function addTask(task) {
  // return {type: 'ADD', task};

  return dispatch => {
    dispatch({type: 'ADD_TASK', task});
  };
}

export function removeTask(index) {
  return {type: 'REMOVE_TASK', index};
}
