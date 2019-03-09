let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");

module.exports = function(app) {
app.get("/api/users", function(req, res){
	db.Users.findAll().then(function(data){
		res.json(data);
	})
})

app.get("/api/posts", function(req, res){
	db.Posts.findAll().then(function(data){
		res.json(data);
	})
})

app.post("/api/users", function(req, res) {
	db.Users.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		description: req.body.description
	}).then(response => {
		res.json(response);
	})
})

app.post("/api/posts", function(req, res) {
	db.Posts.create({
		eventName: req.body.eventName,
		time: req.body.time,
		location: req.body.location,
		description: req.body.description
	}).then(response => {
		res.json(response);
	})
})
};
