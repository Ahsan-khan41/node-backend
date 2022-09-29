const { router } = require("../app");
const propertyController = require("../controllers/property.controller");
// middlewares
const { requireSignin } = require("../middlewares/authorization");

router.post("/register-property", requireSignin, propertyController.registerProperty);
router.get("/property/all", requireSignin, propertyController.getAllProperties);

module.exports = router;
