import Joi from 'joi';
import bcrypt from 'bcrypt';
import {
  userSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid
} from '../../util';

export default (context, input) => {
  return isValid(input, userSchema, ['firstName', 'lastName', 'email', 'password'])
    .then(() => {
      console.log(context);
      return DBQuery.getOne(
        context,
        'user',
        {
          where: {email: input.email, firstName: input.firstName},
          error: 'DoesNotExist'
        }
      );
    });
};
