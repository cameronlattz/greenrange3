const router = require("express").Router();
const userMealPlanHistoryController = require("../../controllers/userMealPlanHistoryController");

// Matches with "/api/users"
router.route("/")
  .get(userMealPlanHistoryController.findAll)
  .post(userMealPlanHistoryController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userMealPlanHistoryController.findById)
  .put(userMealPlanHistoryController.update)
  .delete(userMealPlanHistoryController.remove);



module.exports = router;