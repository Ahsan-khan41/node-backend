const { propertyService } = require("../services");
const { formatResponse } = require("../helpers/utility");
const { query } = require("express");

const createProperty = async (req, res) => {
  try {
    const response = await propertyService.createProperty(req.body, req.id);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    console.log(message);
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
};

const getAllProperties = async (req, res) => {
  try {
    const response = await propertyService.getAllProperties(req.query);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
};

const getPropertyDetails = async (req, res) => {
  try {
    const response = await propertyService.getPropertyDetails(req.params.id);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyDetails,
};
