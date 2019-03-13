let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");


module.exports = function(app) {
	app.get("/", function(req, res) {
        db.Posts.findAll();
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})

	app.get("/homepage.html", function(req, res){
		res.sendFile(path.join(__dirname, "../public/homepage.html"));
	})

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
};
