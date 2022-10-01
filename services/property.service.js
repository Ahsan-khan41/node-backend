const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const Property = require("../model/Property");
const { BaseError } = require("../helpers/ErrorHandling");

const createProperty = async (data, userId) => {
  const response = validate.registerPropertySchema.validate({ ...data });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  await Property.create({ ...data, createdBy: userId });

  return formatResponse(201, "Success", "Property created");
};

const getAllProperties = async () => {
  const properties = await Property.find();

  return formatResponse(200, "Success", "Properties get Successfully", {
    data: { properties },
  });
};

const getPropertyDetails = async (_id) => {
  const property = await Property.findOne({ _id });

  if (property) {
    return formatResponse(200, "Success", "Get Product detail Successfully", {
      data: {
        property,
      },
    });
  }
  throw new BaseError("Invalid property ID", 404);
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyDetails,
};
