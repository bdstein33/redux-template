import {faqSectionSchema} from '../../joiSchema';
import {isValid, plain} from '../../util';

export default function createFaq(context, input) {
  return isValid(input, faqSectionSchema, ['faqId', 'name'], ['id'])
    .then(() => {
      // Create FAQ
      return context.db.faqSection.create(input, {transaction: context.transaction});
    }).then(createdFaq => {
      return plain(createdFaq);
    });
}
