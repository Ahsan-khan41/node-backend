const { propertyService } = require("../services");
const { formatResponse } = require("../helpers/utility");

const registerProperty = async (req, res) => {
  try {
    const response = await propertyService.registerProperty(req.body);
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

async function getAllProperties(req, res) {
  try {
    const response = await propertyService.getAllProperties();
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

module.exports = {
  registerProperty,
  getAllProperties,
};
