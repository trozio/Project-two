let express = require("express");
let app = express();
let path = require("path");
const User = require('../models/users.js');

module.exports = function(app) {
  app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

  app.get("/profile", function(req, res) {
    // res.redirect("/profile/:name")
    res.sendFile(path.join(__dirname, "../public/profile.html"))
  })
  app.get("/profile/:name", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"))
    res.send(req.params)
    console.log(req.params)
  })
}