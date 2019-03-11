let express = require("express");
let app = express();
let path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));
	});

  app.get("/profile", function(req, res) {
    res.redirect("/profile/:name")
    res.send(req.params)
  })
  app.get("/profile/:name", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"))
    res.send(req.params)
  })
}
