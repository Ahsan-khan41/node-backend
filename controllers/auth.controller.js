const { formatResponse } = require("../helpers/utility");
const { authService } = require("../services/index");

const registerUser = async (req, res) => {
  try {
    const response = await authService.register(req.body);

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

const loginUser = async (req, res) => {
  try {
    const response = await authService.login(req.body);
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
  registerUser,
  loginUser,
};
