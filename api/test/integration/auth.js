import {expect} from 'chai';
import _ from 'lodash';
import cit from '../util/cit';

import logIn from '../../endpoints/auth/logIn';
import signUp from '../../endpoints/auth/signUp';

describe ('Auth', () => {
  describe ('logIn', () => {
    it('this is a test', () => {
      expect(true).to.equal(true);
    });
  })
})

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       [1,2,3].indexOf(5).should.equal(-1);
//       [1,2,3].indexOf(0).should.equal(-1);
//     });
//   });
// });