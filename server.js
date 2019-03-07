let express = require("express");
let app = express();
let path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);


app.listen(PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log("Listening on port ${PORT}.");
})
