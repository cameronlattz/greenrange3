const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/users/:id"
router
  .route("/")
  .get(ingredientController.find2);
router
  .route("/:id")
  .get(ingredientController.findById);



module.exports = router;