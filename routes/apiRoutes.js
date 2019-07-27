const db = require("../models");

module.exports = function(app) {
  // Register a new User
  app.get("/api/examples", function(req, res) {
    db.User.find({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.post("/register", (req, res) => {
    let newUser = req.body;
    db.User.create(newUser).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.post("/login", (req, res) => {
    let loginUser = req.body;
    console.log(loginUser);
    db.User.findOne({ where: { username: loginUser.username } }).then(user => {
      if (!user) {
        console.log("No user");
        res.json("No such user");
        return "No such username.";
      }
      if (loginUser.password !== user.password) {
        console.log("wrong password");
        res.json("Wrong password");
        return "Incorrect password.";
      }
      Cookies.set("usernameG6", loginUser.username);
      Cookies.set("roleG6", loginUser.role_id);
      //redirect to main page based on type of user
      res.json(user);
      console.log("logged in successfully");
      return "Login";
    });
  });
};
