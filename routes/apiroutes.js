let path = require("path");
let Users = require("../models/users.js");
let db = require("../models/index.js");
let express = require("express");
var axios = require('axios')
let users = require('../models/users.js')
const url = require('url')

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
		email: req.body.email,
		photo: req.body.photo,
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
		tag10: req.body.tag10
	}).then(response => {
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
		tag10: req.body.tag10
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
        console.log(response.data)
        res.json(response.data);

      })
      .catch(function () {
        res.status(500).json({
          message: 'Internal Error'
        });
      });
  });
};
