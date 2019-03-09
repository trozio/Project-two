let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");

module.exports = function(app) {
	app.get("/", function(req, res) {
        Users.findAll();
		res.sendFile(path.join(__dirname, "../public/login.html"));
	})
	app.get("/index.html", function(req, res) {
        Users.findAll();
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})



};
