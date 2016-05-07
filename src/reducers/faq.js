const initialState = {
  userFaqs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_FAQS':
      return Object.assign({}, state, {
        userFaqs: action.data,
      });
    default:
      return state;
  }
};
