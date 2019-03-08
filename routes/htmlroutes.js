let path = require("path");
module.exports = function(app) {
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/login.html"));
  })
  app.get("/index.html", function(req, res){
      res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.post("/api/users", function(req, res){
let newUser = req.body;

  })

};
