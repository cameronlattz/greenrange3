var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserMealPlanHistorySchema = new Schema({
  // `name` must be unique and of type String
  userId: {
    type: Schema.Types.ObjectId
  },
  planId: {
    type: Schema.Types.ObjectId
  },
  date: {
    type: Date
  }

});

// This creates our model from the above schema, using mongoose's model method
var UserMealPlanHistory = mongoose.model("UserMealPlanHistory", UserMealPlanHistorySchema);

// Export the User model
module.exports = UserMealPlanHistory;