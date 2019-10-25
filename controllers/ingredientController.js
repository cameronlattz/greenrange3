// Defining methods for the booksController
module.exports = {
  findById: function(req, res) {
    console.log(req.params.id);
    res.sendFile("../client/public/" + req.params.id)
  },
  find2: function(req, res) {
    res.sendFile("../client/public/shrimp-paella.html")
  }
};