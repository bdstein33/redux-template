import actionCreator from '../util/actionCreator';

export default {
  signUp: (data) => {
    return actionCreator('SIGNUP', data);
  },

  logIn: (data) => {
    return actionCreator('LOGIN', data);
  }
};

