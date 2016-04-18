const initialState = {
  visible: false,
  body: null,
  title: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        visible: true,
        body: action.body,
        title: action.title
      });
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        visible: false,
        body: null,
        title: null,
        error: null
      });
    case 'MODAL_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'SIGNUP__ERROR':
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};
