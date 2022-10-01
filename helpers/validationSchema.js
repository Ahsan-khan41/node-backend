const Joi = require("joi");

const validationValues = {
  email: Joi.string()
    .lowercase()
    .pattern(
      new RegExp(
        "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
      )
    )
    .required()
    .messages({
      "string.base": `Email does not have a valid value`,
      "string.pattern.base": `Email does not have a valid value`,
      "string.empty": `Email cannot be empty`,
      "any.required": `Email is required`,
    }),
  password: Joi.string().lowercase().required().min(6).messages({
    "string.pattern.base": `Password does not have a valid value`,
    "string.empty": `Password cannot be empty`,
    "any.required": `Password is required`,
    "string.min": `Password length must be 6 characters long`,
  }),
  firstName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `First Name length must be atleast 3 characters long`,
    "string.max": `First Name length must be exeed 20 characters`,
  }),
  lastName: Joi.string().min(3).max(20).required().messages({
    "string.empty": `Name cannot be empty`,
    "any.required": `Name required`,
    "string.min": `Last Name length must be atleast 3 characters long`,
    "string.max": `Last Name length must not be exeed 20 characters`,
  }),
};

const propertyDetailsSchema = Joi.object({});

const registerUserSchema = Joi.object({
  email: validationValues.email,
  firstName: validationValues.firstName,
  lastName: validationValues.lastName,
  password: validationValues.password,
});

const registerPropertySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `Title cannot be empty`,
    "any.required": `Title is required`,
  }),
  price: Joi.number().required().messages({
    "string.empty": `Price cannot be empty`,
    "any.required": `Price is required`,
  }),
  beds: Joi.number().required().messages({
    "string.empty": `Beds cannot be empty`,
    "any.required": `Beds is required`,
  }),
  baths: Joi.number().required().messages({
    "string.empty": `Baths cannot be empty`,
    "any.required": `Baths is required`,
  }),
  details: {
    type: Joi.string().required().messages({
      "string.empty": `Property type cannot be empty`,
      "any.required": `Property type is required`,
    }),
    area: Joi.string().required().messages({
      "string.empty": `Area cannot be empty`,
      "any.required": `Area is required`,
    }),
    city: Joi.string().required().messages({
      "string.empty": `City cannot be empty`,
      "any.required": `City is required`,
    }),
    size: Joi.string().required().messages({
      "string.empty": `Size cannot be empty`,
      "any.required": `Size is required`,
    }),
    sizeUnit: Joi.string().required().messages({
      "string.empty": `Unit cannot be empty`,
      "any.required": `Unit is required`,
    }),
  },
});

module.exports = {
  registerUserSchema,
  registerPropertySchema,
};
