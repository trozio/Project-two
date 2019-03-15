let express = require("express");
let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let db = require("./models/index.js");



var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

var roomno = 1;
io.on('connection', function (socket) {

  //Increase roomno 2 clients are present in a room.
  if (io.nsps['/'].adapter.rooms["room-" + roomno] && io.nsps['/'].adapter.rooms["room-" + roomno].length > 1) roomno++;
  socket.join("room-" + roomno);

  //Send this event to everyone in the room.
  io.sockets.in("room-" + roomno).emit('connectToRoom', "You are in room no. " + roomno);
})

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});



