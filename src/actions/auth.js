import authService from '../services/auth';


export function signUp(data) {
  return dispatch => {
    console.log('START');
    dispatch({type: 'START_LOGIN'});

    authService.signUp(data)
      .then(result => {
        console.log('GFFF');
        console.log(result);
      });
  };
}
