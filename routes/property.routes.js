const { router } = require("../app");
const propertyController = require("../controllers/property.controller");
// middlewares
const { requireSignin } = require("../middlewares/authorization");
const { fileUpload } = require("../middlewares/fileUpload");
const cpUpload = fileUpload.fields([{name: 'images', maxCount: 1}])

router.post("/create-property", requireSignin, cpUpload, propertyController.createProperty);
router.get("/property/all", requireSignin, propertyController.getAllProperties);
router.get("/property/:id", requireSignin, propertyController.getPropertyDetails);

module.exports = router;
