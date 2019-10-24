const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.MealPlan
      .find(req.query)
      .sort({_id:-1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.MealPlan
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    req.body.date = new Date(req.body.date);
    db.MealPlan
      .create(req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  seed: function(req, res) {
    db.MealPlan
      .create(req)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.MealPlan
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.MealPlan
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByWeek: function(req, res) {
    db.MealPlan
      .find({date: {$gte: req.body.startDate, $lte: req.body.endDate}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};