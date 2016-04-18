import request from '../util/request';
export default {
  signUp: (data) => {
    // return fetch('/api/auth', {
    //   method: 'post',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   }),
    //   body: JSON.stringify(data)
    // });


    return request('signUp', data);
  }
};
