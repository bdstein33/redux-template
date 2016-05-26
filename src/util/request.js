import axios from 'axios';

export default (endpoint, data = {}) => {
  const requestObj = {
    method: endpoint.method,
    url: `http://127.0.0.1:3000/api/${endpoint.url}`
  };

  if (endpoint.method === 'get') {
    requestObj.params = data;
  } else {
    requestObj.data = data;
  }
  console.log('REQUESTING:', requestObj);
  return axios(requestObj)
    .then(result => {
      return result.data;
    }).catch(err => {
      console.log('ERROR', err);
      return {};
    });
};
