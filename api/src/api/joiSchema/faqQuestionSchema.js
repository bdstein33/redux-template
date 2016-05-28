import Joi from 'joi';

export default {
  id: Joi.number().integer().positive(),
  name: Joi.string(),
  content: Joi.string()
};
