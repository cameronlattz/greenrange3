var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MealPlanSchema = new Schema({
  // `name` must be unique and of type String
  optionName: {
    type: String
  },
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meal"
    }
  ],
  date: {
    type: Date
  },
  dietOptionIds:{
    type: Schema.Types.ObjectId
  }
});

// This creates our model from the above schema, using mongoose's model method
var MealPlan = mongoose.model("MealPlan", MealPlanSchema);

// Export the MealPlan model
module.exports = MealPlan;