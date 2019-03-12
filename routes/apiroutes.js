let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");

module.exports = function(app) {
app.get("/api/users", function(req, res){
	db.Users.findAll().then(function(data){
		res.json(data);
		console.log(data);
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
		console.log(response);
		res.json(response);
	})
})

app.post("/api/posts", function(req, res) {
	db.Posts.create({
		eventName: req.body.eventName,
		time: req.body.time,
		location: req.body.location,
		description: req.body.description,
		tag1: req.body.tag1,
		tag2: req.body.tag2,
		tag3: req.body.tag3,
		tag4: req.body.tag4,
		tag5: req.body.tag5,
		tag6: req.body.tag6,
		tag7: req.body.tag7,
		tag8: req.body.tag8,
		tag9: req.body.tag9,
		tag10: req.body.tag1
	}).then(response => {
		res.json(response);
	})
})
};
