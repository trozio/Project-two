let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");

module.exports = function(app) {
app.post("/api/users", function(req, res) {
	db.Users.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		description: req.body.description
	}).then(response => {
		res.json(response);
	})

})
};
