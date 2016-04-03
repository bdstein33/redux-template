import Joi from 'joi';

export default {
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().min(7).max(32),
  password: Joi.string()
};
