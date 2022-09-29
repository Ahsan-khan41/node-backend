const { registerProperty, getAllProperties } = require("./property.service");
const { register, login } = require("./auth.service");

const authService = {
  register,
  login,
};

const propertyService = {
  registerProperty,
  getAllProperties,
};

module.exports = { propertyService, authService };
