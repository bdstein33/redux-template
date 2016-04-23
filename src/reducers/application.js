const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        user: action.data,
      });
    case 'SIGNUP':
      return Object.assign({}, state, {
        user: action.data,
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        user: null,
      });
    default:
      return state;
  }
};
