const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/users"
router.route("/")
  .get(ingredientController.findAll)
  .post(ingredientController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(ingredientController.findById)
  .put(ingredientController.update)
  .delete(ingredientController.remove);



module.exports = router;