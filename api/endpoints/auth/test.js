// import _ from 'lodash';
// import {
//   userSchema
// } from '../../joiSchema';
// import {
//   DBQuery,
//   isValid,
//   PasswordEncryptor,
//   plain
// } from '../../util';

// export default (context, input) => {
//   return isValid(input, userSchema, ['firstName', 'lastName', 'email', 'password'])
//     .then(() => {
//       console.log('XXXX');
//       return DBQuery.getOne(
//         context,
//         'user',
//         {
//           where: {email: input.email},
//           error: 'AlreadyExists'
//         }
//       );
//     }).then(() => {
//       return PasswordEncryptor.hash(input.password);
//     }).then(password => {
//       input.password = password;
//       return context.db.user.create(input, {transaction: context.transaction});
//     }).then(user => {
//       return _.omit(plain(user), 'password');
//     });
// };


export default () => {
  return 'SUCCESS';
}