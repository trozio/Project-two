var path = require('path');
var axios = require('axios')
let users = require('../models/users.js')

module.exports = function(app) {

	app.get('/api/profile', function(req, res) {
        axios({
            url: 'http://chrisoffiong.auth0.com/', // domain
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + req.query.access_token,
            },
          })
            .then(function(response) {
              console.log(response.data)
              res.json(response.data);

            })
            .catch(function() {
              // TODO:
            });
     
        
        

})
}