const { router } = require("../app");
const propertyController = require("../controllers/property.controller");
// middlewares
const { requireSignin } = require("../middlewares/authorization");
const { fileUpload } = require("../middlewares/fileUpload");
const ppUpload = fileUpload.fields([{name: 'images', maxCount: 3}]) // ppUpload = property-pics upload

router.post("/create-property", requireSignin, ppUpload, propertyController.createProperty);
router.get("/property/all", requireSignin, propertyController.getAllProperties);
router.get("/property/:id", requireSignin, propertyController.getPropertyDetails);

module.exports = router;
