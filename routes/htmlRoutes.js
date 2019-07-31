const db = require("../models");
// const Cookies = require("js-cookie");
const path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // cookies don't work on localhost in chrome. I will attempt to test them using
    // the Heroku deployment
    req;
    // let currentUser = Cookies.get("usernameG6");
    let currentRole = 1; //Cookies.getnpm("roleG6");
    console.log(currentUser);
    // if (currentUser) {
    //   db.User.findOne({ where: { username: currentUser } }).then(function(
    //     userInfo
    //   ) {
        if (currentRole === 1) {
          res.redirect("/user");
        } else {
          res.redirect("/admin");
        }
        res.json(userInfo);
      // });
    // } else {
    //   res.redirect("/login");
    // }
  });

  app.get("/login", (req, res) => {
    req;
    res.sendFile(path.join(__dirname, "../public/G6-HTML/index.html"));
  });

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/user.html"));
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/admin.html"));
  });

  app.get("/accessories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/accessories.html"));
  });

  app.get("/hardware", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/hardware.html"));
  });

  app.get("/software", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/software.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("ERROR - 110010100: Page Not Found");
  });

};
