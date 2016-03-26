const initialState = ['Redux Practice'];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        action.task,
        ...state
      ];
    case 'REMOVE_TASK':
      return state.filter((task, index) => index !== action.index);
    default:
      return state;
  }
};
