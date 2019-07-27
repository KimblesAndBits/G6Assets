const db = require("../models");
const Cookies = require("js-cookie");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    req;
    let currentUser = Cookies.get("usernameG6");
    let currentRole = Cookies.get("roleG6");
    if (currentUser) {
      db.User.findOne({ where: { username: currentUser } }).then(function (
        userInfo
      ) {
        if (currentRole === 1) {
          //print info for user role
        } else {
          //print info for admin role
        }
        res.json(userInfo);
      });
    } else {
      //redirect to login
      res.json(false);
    }
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    req;
    res.json(res.body);
  });
};
