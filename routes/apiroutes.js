let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");
var axios = require('axios')
const url = require('url')
let app = express();

module.exports = function(app) {
	app.get("/api/users", function(req, res) {
		db.Users.findAll().then(function(data) {
			res.json(data);
		})
	})

	app.get("/api/posts", function(req, res) {
		db.Posts.findAll().then(function(data) {
			res.json(data);
		})
	})

	app.post("/api/posts", function(req, res) {
		db.Posts.create({
			eventName: response.data.eventName,
			time: response.data.time,
			location: response.data.location,
			logitude: response.data.longitude,
			latitude: response.data.latitude,
			tag1: response.data.tag1,
			tag2: response.data.tag2,
			tag3: response.data.tag3,
			tag4: response.data.tag4,
			tag5: response.data.tag5,
			tag6: response.data.tag6,
			tag7: response.data.tag7,
			tag8: response.data.tag8,
			tag9: response.data.tag9,
			tag10: response.data.tag10
		}).then(response => {
			res.json(response);
		})
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
