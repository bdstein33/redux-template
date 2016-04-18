import authService from '../services/auth';
import actionCreator from '../util/actionCreator';

export function signUp(data) {
  return actionCreator('SIGNUP', data, authService.signUp);
    // .then(result => {
    //   console.log('XXXX');
    //   console.log(result);
    // })
}
