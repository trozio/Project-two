let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");
var axios = require('axios')
let users = require('../models/users.js')
const url = require('url')
let app = express();

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
		userName: req.body.nickname,
		email: req.body.name,
		photo: req.body.picture,
		tag1: req.body.tag1,
		tag2: req.body.tag2,
		tag3: req.body.tag3,
		tag4: req.body.tag4,
		tag5: req.body.tag5,
		tag6: req.body.tag6,
		tag7: req.body.tag7,
		tag8: req.body.tag8,
		tag9: req.body.tag9,
		tag10: req.body.tag10
	}).then(response => {
		res.json(response);
	})
})

app.post("/api/posts", function(req, res) {
	db.Posts.create({
		eventName: response.data.eventName,
		time: response.data.time,
		location: response.data.location,
		description: response.data.description,
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


app.get('/api/profile', function (req, res) {
    res.redirect('/profile');
  })

  app.post('/get/token', (req, res) => {
    const token = req.body.access_token;

    axios({
        url: 'http://chrisoffiong.auth0.com/userinfo', // domain
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      })
      .then(function (response) {
		  let data = response.data;
        console.log(data)


		// app.post("/api/users", function(data, res){
			db.Users.create({
			userName: data.nickname,
			email: data.name,
			photo: data.picture,
			tag1: data.tag1,
			tag2: data.tag2,
			tag3: data.tag3,
			tag4: data.tag4,
			tag5: data.tag5,
			tag6: data.tag6,
			tag7: data.tag7,
			tag8: data.tag8,
			tag9: data.tag9,
			tag10: data.tag10}).then(res.json).catch(function(err) {
				console.log(err);
			})
// 		}).then(function(response){
// res.json(response);
// 		})
      })
      .catch(function () {
        res.status(500).json({
          message: 'Internal Error'
        });
      });
  });
};
