import Joi from 'joi';
import faqQuestionSchema from './faqQuestionSchema';

export default {
  id: Joi.number().integer().positive(),
  name: Joi.string(),
  questions: Joi.array().items(faqQuestionSchema)
};
