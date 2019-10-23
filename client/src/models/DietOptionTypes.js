var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var DietOptionTypesSchema = new Schema({
  // `name` must be unique and of type String
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  },
  dietOptionIds:{
    type: [Number]
  },
  favoritePlanIds:{
    type: [Number]
  }
});

// This creates our model from the above schema, using mongoose's model method
var DietOptionTypes = mongoose.model("DietOptionTypes", DietOptionTypesSchema);

// Export the DietOptionTypes model
module.exports = DietOptionTypes;