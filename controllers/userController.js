const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findUserId: function(req, res) {
<<<<<<< HEAD
=======
    console.log("redsjad", req.body)
>>>>>>> f8ad419cd965df0d2d03fe60726b8dc0cdbc8384
    db.User
    .findOne({email : req.body.email, password : req.body.password})
    .then(dbModel => {console.log(dbModel); res.json(dbModel._id)})
    .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({_id:-1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};