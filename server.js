const express = require('express');
const app = express();
const path = require('path')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


require(path.join(__dirname, './routes/htmlroutes.js'))(app);

app.use(express.static('public'))

http.listen(PORT, function() {
  console.log('listening on *:3000');
});