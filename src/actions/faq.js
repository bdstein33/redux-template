import {actionCreator} from '../util';

export default {
  getUserFaqs: (data) => {
    return actionCreator('GET_USER_FAQS', data, {
      request: {
        url: 'faqs/user',
        method: 'GET'
      }
    });
  }
};

