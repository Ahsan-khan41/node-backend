const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const Property = require("../model/Property");
const { BaseError } = require("../helpers/ErrorHandling");
const cloudinary = require("../config/cloudinary");

const createProperty = async (data, userId) => {
  // const result = await cloudinary.uploader.upload(data.images);

  const response = validate.registerPropertySchema.validate({ ...data });
  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const property = await Property.create({
    ...data,
    createdBy: userId,
    // images: [...result.url],
  });

  return formatResponse(201, "Success", "Property created", { property });
};

const getAllProperties = async (query) => {
  const {
    page,
    offset,
    price_min,
    price_max,
    bed_min,
    bed_max,
    bath_min,
    bath_max,
    order_by,
    order,
  } = query;
  let skippable = 0,
    limit = 2;
  if (page >= 1 && offset) {
    skippable = (page - 1) * limit;
  }

  let properties;
  let totalProperties;
  if (order) {
    properties = await Property.find().sort({ price: order || 1 });
  } else {
    properties = await Property.find().sort({ createdAt: -1 });
  }

  if (price_min) {
    properties = properties.filter((prop) => prop.price >= price_min);
  }
  if (price_max) {
    properties = properties.filter((prop) => prop.price <= price_max);
  }
  if (bed_min) {
    properties = properties.filter((prop) => prop.beds >= bed_min);
  }
  if (bed_max) {
    properties = properties.filter((prop) => prop.beds <= bed_max);
  }
  if (bath_min) {
    properties = properties.filter((prop) => prop.baths >= bath_min);
  }
  if (bath_max) {
    properties = properties.filter((prop) => prop.baths <= bath_max);
  }

  totalProperties = properties.length;
  properties = properties.slice(skippable, skippable + limit);

  return formatResponse(200, "Success", "Properties get Successfully", {
    page,
    totalProperties,
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
