const router = require("express").Router();
const userController = require("../../controllers/userController");

// sign in route
router.route("/signin")
  .post(userController.findUserId);


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



module.exports = router;