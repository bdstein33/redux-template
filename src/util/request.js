const endpointMapper = {
  signUp: {
    url: 'auth',
    method: 'post'
  }
};

export default (serviceFunc, data) => {
  const endpoint = endpointMapper[serviceFunc];

  if (!endpoint) {
    console.error(`Invalid service request: ${serviceFunc}`);
  }

  const requestObj = {
    method: endpoint.method,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  if (endpoint.method === 'post') {
    requestObj.body = JSON.stringify(data);
  }
  return fetch(`/api/${endpoint.url}`, requestObj)
    .then(response => {
      return response.json().then(output => {
        return output;
      });
    });
};
