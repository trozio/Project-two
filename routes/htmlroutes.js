let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");


module.exports = function(app) {
	app.get("/", function(req, res) {
        db.Posts.findAll();


			res.sendFile(path.join(__dirname, "../views/index.html"));
})

	

	app.get("/homepage.html", function(req, res){
		res.sendFile(path.join(__dirname, "../views/homepage.html"));
	})


  app.get("/profile", function(req, res) {
    // res.redirect("/profile/:name")
	console.log("hello");
    res.sendFile(path.join(__dirname, "../views/profile.html"))
  })

  app.get("/profile/:name", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"))
    res.send(req.params)
    console.log(req.params)
  })
};
