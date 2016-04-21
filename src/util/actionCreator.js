/*
  This function takes in an action name and automatically creates a start and end dispatch to help with lifecycle events
*/
export default (name, data, actionFunc) => {
  return dispatch => {
    dispatch({type: `${name}__START`});
    return actionFunc.call(this, data)
     .then(result => {
      console.log(result);
       if (result.error) {
         dispatch({type: `${name}__ERROR`, error: result.error});
       } else {
         dispatch({type: `${name}`, data: result});
       }

       return result;
     });
  };
};