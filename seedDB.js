const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://shane:shane1@ds339348.mlab.com:39348/heroku_zs4rh70p"
);
const meals = require("./models/seeds/mealSeeds");
// const express = require("express");
// const routes = require("./src/routes");
// const app = express();
// const PORT = process.env.PORT || 3001;
// console.log("test");
// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/greenrange");


// // Start the API server
// app.listen(PORT, function() {
//   console.log(`API Server now listening on PORT ${PORT}!`);
// });


db.Meal
  .deleteMany({})
  .then(() => db.Meal.collection.insertMany(meals))
  .then(data => {
    let someArray = Object.values(data.insertedIds);
    var newArray = [], size = 5;
    while (someArray.length > 0) 
      {
        newArray.push(someArray.splice(0, size));
      }

    db.MealPlan.collection.deleteMany({});
    console.log(newArray);
    let d = 0;
    for(let i = 0; i< newArray.length; i++){
      let mealPlan = {};
      mealPlan.meals = newArray[i];
      mealPlan.date = new Date(Date.now());
      db.MealPlan.collection.insert(mealPlan)
        .then(data => {
          d++;
         console.log(data);
         if(d === 3){
           process.exit(0);
         }
        })
        .catch(err => {
         console.error(err);
         process.exit(1);
        });
    }
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });