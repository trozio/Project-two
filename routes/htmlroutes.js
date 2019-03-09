let path = require("path");
let Users = require("../models/users.js");
module.exports = function(app) {
	// app.get("/", function(req, res) {
    //     Users.findAll();
	// 	res.sendFile(path.join(__dirname, "../public/login.html"));
	// })
	// app.get("/index.html", function(req, res) {
    //     Users.findAll();
	// 	res.sendFile(path.join(__dirname, "../public/index.html"));
	// })

	app.post("/api/users", function(req, res) {
		let newUser = req.body;
		Users.create({
			firstName: req.body.name,
			lastName: req.body.lastName,
			description: req.body.description
		}).then(response => {
			res.json(response);
		})

	})

};
