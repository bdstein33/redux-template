import {actionCreator} from '../util';


export default {
  signUp: (data) => {
    return actionCreator('SIGNUP', data, {
      success: ['HIDE_MODAL'],
      navigate: '/'
    });
  },

  logIn: (data) => {
    return actionCreator('LOGIN', data, {
      success: ['HIDE_MODAL'],
      navigate: '/'
    });
  },

  logOut: () => {
    return actionCreator('LOGOUT', null, {
      navigate: '/'
    });
  }
};

