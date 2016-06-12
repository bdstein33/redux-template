import {actionCreator} from '../util';

export default {
  getUserFaqs: (data) => {
    return actionCreator('GET_USER_FAQS', data, {
      request: {
        url: 'faqs/user',
        method: 'get'
      }
    });
  },

  getFaq: (data) => {
    return actionCreator('GET_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'get'
      }
    });
  }
};
