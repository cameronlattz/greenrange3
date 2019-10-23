var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new IngredientSchema object
// This is similar to a Sequelize model
var IngredientSchema = new Schema({
  // `name` must be unique and of type String
  ingredientName: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Ingredient = mongoose.model("Ingredient", IngredientSchema);

// Export the Ingredient model
module.exports = Ingredient;