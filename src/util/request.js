import {ajax} from 'jquery';

const endpointMapper = {
  SIGNUP: {
    url: 'auth',
    method: 'POST'
  },
  LOGIN: {
    url: 'auth',
    method: 'GET'
  }
};

export default (serviceFunc, data) => {
  const endpoint = endpointMapper[serviceFunc];

  if (!endpoint) {
    console.error(`Invalid service request: ${serviceFunc}`);
    return null;
  }

  const requestObj = {
    url: `/api/${endpoint.url}`,
    type: endpoint.method
  };

  if (data) {
    requestObj.data = data;
  }

  return ajax(requestObj);
};
