import _ from 'lodash';
import db from '../../db';
import sanitizeInput from './sanitizeInput';


/* Wraps input submitted to API into payload object and returns output from promisified controller function */
export default controllerName => {
  return (req, res) => {
    const context = {db},
      endpoint = require(`../endpoints/${controllerName}`),
      input = Object.keys(req.query).length ? req.query : req.body,
      sanatizedInput = sanitizeInput(_.cloneDeep(input));

      console.log('testing')
      console.log(input);
      console.log(req.query);
      console.log(req.body);

    return new Promise(resolve => {
      resolve(db.sequelize.transaction(transaction => {
        context.transaction = transaction;

        return endpoint.call(null, context, sanatizedInput);
      }));
    }).then(output => {
      return res.json(output);
    }).catch(error => {
      return res.status(400).send({error: error.message});
    });
  };
};
