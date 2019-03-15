let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");


module.exports = function(app) {
	app.get("/", function(req, res) {
        db.Posts.findAll();
			res.sendFile(path.join(__dirname, "../views/index.html"));
})

app.get("/profile", function(req, res){
	    res.sendFile(path.join(__dirname, "../views/profile1.html"))
})

	app.get("/homepage", function(req, res){
		res.sendFile(path.join(__dirname, "../views/homepage.html"));
	})
}
