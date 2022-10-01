const { formatResponse } = require("../helpers/utility");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.requireSignin = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN_KEY, async (err, decoded) => {
      if (err) {
        const { message, statusCode } = err;

        res
          .status(500)
          .json(formatResponse(statusCode || 500, "error", message));
      } else {
        let user = await User.findOne({ _id: decoded._id });
        let { firstName, lastName, email, _id } = user;
        req.user = { firstName, lastName, email, _id };
        req.id = user?._id.toString();
        next();
      }
    });
  } else {
    return res.status(400).json({ message: "Authorization Required" });
  }
};
