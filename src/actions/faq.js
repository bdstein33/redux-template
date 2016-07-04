import {actionCreator} from '../util';

export default {
  getUserFaqs(data) {
    return actionCreator('GET_USER_FAQS', data, {
      request: {
        url: 'faqs/user',
        method: 'get'
      }
    });
  },

  getFaq(data) {
    return actionCreator('GET_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'get'
      }
    });
  },

  createFaq(data) {
    return actionCreator('CREATE_FAQ', data, {
      request: {
        url: 'faqs',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  createFaqQuestion(data) {
    return actionCreator('CREATE_FAQ_QUESTION', data, {
      request: {
        url: 'faqs/questions',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  },

  createFaqSection(data) {
    return actionCreator('CREATE_FAQ_SECTION', data, {
      request: {
        url: 'faqs/sections',
        method: 'post'
      },
      success: ['HIDE_MODAL'],
      error: ['MODAL_ERROR']
    });
  }
};

