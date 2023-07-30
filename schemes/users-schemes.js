import Joi from "joi";

const userSignupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userSigninSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default {
  userSigninSchema,
  userSignupSchema,
};
