const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const Property = require("../model/Property");

async function registerProperty(data) {
  const { title, price, beds, baths, details } = data;
  const { type, area, city, size, sizeUnit } = details;

  const response = validate.registerPropertySchema.validate({
    title,
    price,
    beds,
    baths,
    type,
    area,
    city,
    size,
    sizeUnit,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  await Property.create({
    ...data,
  });

  return formatResponse(201, "Success", "Property created");
}

async function getAllProperties() {
  const properties = await Property.find();

  return formatResponse(200, "Success", "Properties get Successfully", {
    data: { properties },
  });
}

module.exports = {
  registerProperty,
  getAllProperties,
};
