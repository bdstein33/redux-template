import _ from 'lodash';
import {
  userSchema
} from '../../joiSchema';
import {
  DBQuery,
  isValid,
  PasswordEncryptor,
  plain
} from '../../util';

export default (context, input) => {
  return isValid(input, userSchema, ['firstName', 'lastName', 'email', 'password'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'user',
        {
          where: {email: input.email},
          error: 'DoesNotExist'
        }
      );
    }).then(user => {
      return PasswordEncryptor.check(input.password, user.password)
        .then(result => {
          if (!result) {
            Promise.reject(new Error('Invalid login credentials'));
          }

          return _.omit(plain(user), 'password');
        });
    });
};
