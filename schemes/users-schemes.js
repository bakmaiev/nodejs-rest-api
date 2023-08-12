import Joi from "joi";

const userSignupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const userSigninSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userSubUpdateSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const userEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export default {
  userSigninSchema,
  userSignupSchema,
  userSubUpdateSchema,
  userEmailSchema,
};
