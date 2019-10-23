const router = require("express").Router();
const dietOptionTypesController = require("../../controllers/dietOptionTypesController");

// Matches with "/api/users"
router.route("/")
  .get(dietOptionTypesController.findAll)
  .post(dietOptionTypesController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(dietOptionTypesController.findById)
  .put(dietOptionTypesController.update)
  .delete(dietOptionTypesController.remove);



module.exports = router;