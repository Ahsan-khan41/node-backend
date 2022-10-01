const Property = require("../model/Property");

const getUserProperties = async (_id) => {
  const properties = await Property.findOne({ createdBy: _id });

  if (property) {
    return formatResponse(200, "Success", "Get Product detail Successfully", {
      data: {
        property,
      },
    });
  }
  throw new BaseError("User have not created any propert yet!", 404);
};

module.exports = { getUserProperties };
