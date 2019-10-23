const router = require("express").Router();
const mealPlanController = require("../../controllers/mealPlanController");


// Matches with "/api/mealPlans/week"
router
  .route("/week")
  .get(mealPlanController.findByWeek)
  .post(mealPlanController.findAll)
  
// Matches with "/api/mealPlans"
router
  .route("/")
  .get(mealPlanController.findAll)
  .post(mealPlanController.create);

// Matches with "/api/mealPlans/:id"
router
  .route("/:id")
  .get(mealPlanController.findById)
  .put(mealPlanController.update)
  .delete(mealPlanController.remove);




module.exports = router;