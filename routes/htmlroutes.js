let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");

module.exports = function(app) {
	app.get("/", function(req, res) {
        db.Posts.findAll();
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})
	app.get("/login.html", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/login.html"));
	})
};
