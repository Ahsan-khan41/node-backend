const {
  createProperty,
  getAllProperties,
  getPropertyDetails,
} = require("./property.service");
const { register, login } = require("./auth.service");
const { getUserProperties } = require("./user.service");

const authService = {
  register,
  login,
};

const propertyService = {
  createProperty,
  getAllProperties,
  getPropertyDetails,
};

const userService = {
  getUserProperties,
};

module.exports = { propertyService, authService, userService };
