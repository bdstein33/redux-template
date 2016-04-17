export default {
  signUp: (data) => {
    console.log(data);
    console.log('SIGNUP');
    fetch('/api/auth', {
      method: 'post',
      // headers: new Headers({
      //   'Content-Type': 'application/json'
      // }),
      body: JSON.stringify(data)
    }).then(result => {
      console.log(result);
      console.log('XXXX');
      return result;
    }).catch(err => {
      console.log(err);
    });
  }
};
