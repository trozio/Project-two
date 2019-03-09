<<<<<<< HEAD

const express = require('express');


let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
=======
let express = require("express");
let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

>>>>>>> 2485a65e2e1c023d0c814d3994c1e65ef13c8784
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'))

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});
http.listen(PORT, function() {
  console.log('listening on *:3000');
});
