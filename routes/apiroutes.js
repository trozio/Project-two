var path = require('path');
var axios = require('axios')
let users = require('../models/users.js')
const url = require('url')


module.exports = function (app) {

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
}