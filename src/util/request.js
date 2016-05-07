import {ajax} from 'jquery';

export default (endpoint, data) => {
  const requestObj = {
    url: `/api/${endpoint.url}`,
    type: endpoint.method
  };

  if (data) {
    requestObj.data = data;
  }

  return ajax(requestObj);
};
