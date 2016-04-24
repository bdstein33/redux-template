import {actionCreator, navigate} from '../util';


export default {
  signUp: (data) => {
    return actionCreator('SIGNUP', data, {
      success: ['HIDE_MODAL'],
      navigate: '/bar'
    });
  },

  logIn: (data) => {
    return actionCreator('LOGIN', data, {
      success: ['HIDE_MODAL'],
      navigate: '/bar'
    });
  },

  logOut: () => {
    return actionCreator('LOGOUT', null, {
      navigate: '/'
    });
  }
};

