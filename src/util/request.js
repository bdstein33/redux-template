import {ajax} from 'jquery';

const endpointMapper = {
  signUp: {
    url: 'auth',
    method: 'POST'
  }
};

export default (serviceFunc, data) => {
  const endpoint = endpointMapper[serviceFunc];

  if (!endpoint) {
    console.error(`Invalid service request: ${serviceFunc}`);
  }

  const requestObj = {
    url: `/api/${endpoint.url}`,
    type: endpoint.method,
    dataType: 'json',
    contentType: 'application/json'
  };

  if (endpoint.method === 'POST') {
    requestObj.data = JSON.stringify(data);
  }

  console.log('REQUEST OBJ: ', requestObj);
  return ajax(requestObj)
    .done(result => {
      console.log('AAAA');
      console.log(result);
      return result;
    })
    // .fail(result => {
    //   console.log('BBBB');
    //   console.log(result);
    //   return result.responseJSON;
    // })
//   return fetch(`/api/${endpoint.url}`, requestObj)
//     .then(response => {
//       return response.json().then(output => {
//         return output;
//       });
//     });
};
