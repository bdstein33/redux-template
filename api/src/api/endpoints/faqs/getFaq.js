import _ from 'lodash';
import {faqSchema} from '../../joiSchema';
import {isValid, DBQuery} from '../../util';

export default function createFaq(context, input) {
  return isValid(input, faqSchema, ['id', 'userId'])
    .then(() => {
      return DBQuery.getOne(
        context,
        'faq',
        {
          where: input
        }
      );
    });
}
