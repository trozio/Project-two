let express = require("express");
let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let db = require("./models/index.js");
let cors = require('cors')


var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



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

// app.get('/api/posts', function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
// })