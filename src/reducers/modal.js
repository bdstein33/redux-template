const initialState = {
  visible: false,
  body: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        visible: true,
        body: action.body
      });
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        visible: false,
        body: null
      });
    default:
      return state;
  }
};
