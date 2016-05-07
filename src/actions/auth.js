import {actionCreator} from '../util';

export default {
  signUp: (data) => {
    return actionCreator('SIGNUP', data, {
      request: {
        url: 'auth',
        method: 'POST'
      },
      success: ['HIDE_MODAL'],
      navigate: '/'
    });
  },

  logIn: (data) => {
    return actionCreator('LOGIN', data, {
      request: {
        url: 'auth',
        method: 'GET'
      },
      success: ['HIDE_MODAL'],
      navigate: '/'
    });
  },

  logOut: () => {
    return actionCreator('LOGOUT', null, {
      request: {
        url: 'session',
        method: 'DELETE'
      },
      navigate: '/'
    });
  }
};

