const { registerProperty, getAllProperties } = require("./property.service");

const propertyService = {
  registerProperty,
  getAllProperties,
};

module.exports = { propertyService };
