const { formatResponse } = require("../helpers/utility");
const { userService } = require("../services");

const getUserProperties = async (req, res) => {
  try {
    const response = await userService.getUserProperties(req.id);
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
  getUserProperties,
};
