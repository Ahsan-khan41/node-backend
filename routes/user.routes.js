const { router } = require("../app");
const userController = require("../controllers/user.controller");
// middlewares
const { requireSignin } = require("../middlewares/authorization");

router.get("/user/properties", requireSignin, userController.getUserProperties);

module.exports = router;
