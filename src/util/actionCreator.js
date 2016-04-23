import request from './request';

/*
  This function takes in an action name and automatically creates a start and end dispatch to help with lifecycle events
*/
export default (name, data, actionFunc) => {
  return dispatch => {
    dispatch({type: `${name}__START`});
    const returnFunc = actionFunc || request;
    return returnFunc.call(this, name, data)
     .then(result => {
       if (result.error) {
         dispatch({type: `${name}__ERROR`, error: result.error});
       } else {
        console.log('BEFORE DISPATCH');
        console.log(result);
         dispatch({type: `${name}`, data: result});
       }
       return result;
     });
  };
};
