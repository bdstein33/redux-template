export function addTask(task) {
  // return {type: 'ADD', task};

  return dispatch => {
    dispatch({type: 'ADD_TASK', task});
  };
}

export function removeTask(index) {
  return {type: 'REMOVE_TASK', index};
}

export function showModal(body) {
  return dispatch => {
    dispatch({type: 'SHOW_MODAL', body});
  };
}

export function hideModal() {
  return dispatch => {
    dispatch({type: 'HIDE_MODAL'});
  };
}
