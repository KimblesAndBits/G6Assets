const db = require("../models");
const Cookies = require("js-cookie");
const path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    req;
    let currentUser = Cookies.get("usernameG6");
    let currentRole = Cookies.get("roleG6");
    if (currentUser) {
      db.User.findOne({ where: { username: currentUser } }).then(function(
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

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/admin.html"));
  });

  app.get("/accessories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/accessories.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("ERROR - 110010100: Page Not Found");
  });
  
};
