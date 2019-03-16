let express = require("express");
let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let db = require("./models/index.js");
var cookieParser = require('cookie-parser');

app.use(cookieParser());

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static('public'))


require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);

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
