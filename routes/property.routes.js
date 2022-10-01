const { router } = require("../app");
const propertyController = require("../controllers/property.controller");
// middlewares
const { requireSignin } = require("../middlewares/authorization");

router.post("/create-property", requireSignin, propertyController.createProperty);
router.get("/property/all", requireSignin, propertyController.getAllProperties);
router.get("/property/:id", requireSignin, propertyController.getPropertyDetails);

module.exports = router;
