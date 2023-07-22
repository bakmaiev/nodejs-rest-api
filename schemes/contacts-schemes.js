import Joi from "joi";

const contactsAddScheme = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `Missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `Missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `Missing required phone field` }),
});

export default contactsAddScheme;
