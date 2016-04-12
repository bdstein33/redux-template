export default {
  signUp: (data) => {
    console.log('SIGNUP');
    return fetch('/some/url', {
      method: 'get',
      body: data
    }).then(result => {
      console.log(result);
      console.log('XXXX');
      return result;
    }).catch(err => {
      console.log(err);
    })
  }
};
