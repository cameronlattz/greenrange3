const router = require("express").Router();
const userRoutes = require("./user");
const dietOptionTypesRoutes = require("./dietOptionTypes");
const ingredientRoutes = require("./ingredient");
const mealPlanRoutes = require("./mealPlan");
const userMealPlanHistoryRoutes = require("./userMealPlanHistory");
const mealRoutes = require("./meal")
// User routes
router.use("/users", userRoutes);
router.use("/dietOptionTypes", dietOptionTypesRoutes);
router.use("/ingredient", ingredientRoutes);
router.use("/mealPlans", mealPlanRoutes);
router.use("/userMealPlanHistory", userMealPlanHistoryRoutes);
router.use("/meal", mealRoutes);
module.exports = router;