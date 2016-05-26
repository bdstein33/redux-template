import _ from 'lodash';
import {idSchema} from '../../joiSchema';
import {isValid, DBQuery} from '../../util';
import faqService from './faqService';

export default function createFaq(context, input) {
  console.log('GETTING USER FAQS');
  return isValid(input, idSchema)
    .then(() => {
      return DBQuery.getAll(
        context,
        'faq',
        {
          where: {userId: input.id}
        }
      );
    });
}
