export function showModal(body, title) {
  return dispatch => {
    dispatch({type: 'SHOW_MODAL', body, title});
  };
}

export function hideModal() {
  return dispatch => {
    dispatch({type: 'HIDE_MODAL'});
  };
}
