const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.UserMealPlanHistory
      .find(req.query)
      .sort({_id:-1})
      .then(dbModel => {console.log("test all"); res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
      db.UserMealPlanHistory
      .find({userId: req.body})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.UserMealPlanHistory
      .find({userId: req.params.id})
      .then(dbModel => {console.log("test id", dbModel); res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserMealPlanHistory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {console.log(err);res.status(422).json(err)});
  },
  update: function(req, res) {
    db.UserMealPlanHistory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserMealPlanHistory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};