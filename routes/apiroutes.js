let path = require("path");
let Users = require("../models/users.js");
let Userposts = require("../models/userposts.js");
let db = require("../models/index.js");
let express = require("express");
var axios = require('axios')
const url = require('url')
let app = express();

module.exports = function(app) {
	app.get("/api/users", function(req, res) {
		db.Users.findOne({
			where: {
				uniqueID: req.cookies.id
			}
		}).then(function(response){
			res.json(response);
	});
});

app.post("/api/userposts", function(req, res){
	console.log("hit");
	db.Userposts.create({
		event: req.body.event,
		user: req.body.user

	}).then(function(response){
		res.json(response);
	});
});

app.post("/login", function(req, res){
	let token = req.body.access_token;
	axios({
		url: 'http://chrisoffiong.auth0.com/userinfo', // domain
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + token,
		}
	}).then(function(response){
		db.Users.findOne({
			where: {
				uniqueID: response.data.sub
			}
		}).then(function(response){

			res.cookie("id", response.dataValues.uniqueID).json(response.dataValues);
	});

	}).catch(function() {
		res.status(500).json({
			message: 'Internal Error'
		});
	});

});
	app.get("/api/posts", function(req, res) {
		db.Posts.findAll().then(function(data) {
			res.json(data);
		})
	})

	app.post("/api/posts", function(req, res) {
		db.Posts.create({
			eventName: req.body.eventName,
			date:req.body.date,
			time: req.body.time,
			photo: req.body.photo,
			location: req.body.location,
			description: req.body.description,
			longitude: req.body.latitude,
			longitude: req.body.longitude
		}).then(response => {
			res.json(response);
		})
	})

app.get("/logout", function(req, res){
	console.log("hit");
	res.clearCookie("id").send();
})
	app.post('/get/token', function(req, res) {
		let token = req.body.access_token;
		axios({
			url: 'http://chrisoffiong.auth0.com/userinfo', // domain
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token,
			}
		}).then(function(response) {
			let data = response.data;
			db.Users.create({
				userName: data.nickname,
				email: data.name,
				photo: data.picture,
				uniqueID: data.sub,
				tag1: data.tag1,
				tag2: data.tag2,
				tag3: data.tag3,
				tag4: data.tag4,
				tag5: data.tag5,
				tag6: data.tag6,
				tag7: data.tag7,
				tag8: data.tag8,
				tag9: data.tag9,
				tag10: data.tag10
			}).then(function(resp) {
				res.cookie("id", data.sub).json(resp);
			});
		}).catch(function() {
			res.status(500).json({
				message: 'Internal Error'
			});
		});
	})
}
