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
          error: 'AlreadyExists'
        }
      );
    }).then(() => {
      return PasswordEncryptor.hash(input.password);
    }).then(password => {
      input.password = password;
      return context.db.user.create(input, {transaction: context.transaction});
    }).then(user => {
      user = _.omit(plain(user), 'password');
      // Add user to session
      _.merge(context.session, {user});
      
      return user;
    });
};
