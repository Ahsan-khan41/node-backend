const { router } = require("../app");
const propertyController = require("../controllers/property.controller");

router.post("/register-property", propertyController.registerProperty);
router.get("/property/all", propertyController.getAllProperties);

module.exports = router;
