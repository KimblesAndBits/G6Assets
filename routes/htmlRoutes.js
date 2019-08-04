const path = require("path");
const sessionChecker = require("../public/G6-HTML/js/sessionChecker");

module.exports = function(app) {
  app.get("/", sessionChecker, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/G6-HTML/index.html"));
  });

  // app.route('/signup')
  //   .get(sessionChecker, (req, res) => {
  //       res.sendFile(__dirname + '/public/signup.html');
  //   })
  //   .post((req, res) => {
  //       ajax({
  //           username: req.body.username,
  //           email: req.body.email,
  //           password: req.body.password
  //       })
  //       .then(user => {
  //           req.session.user = user.dataValues;
  //           res.redirect('/dashboard');
  //       })
  //       .catch(error => {
  //           res.redirect('/signup');
  //       });
  //   });

  app.get("/user", function(req, res) {
    if (req.session.user && req.cookies.user_sid) {
      res.sendFile(path.join(__dirname, "../public/G6-HTML/user.html"));
    } else {
      res.redirect("/");
    }
  });

  app.get("/admin", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.sendFile(path.join(__dirname, "../public/G6-HTML/admin.html"));
    } else {
      res.redirect("/");
    }
  });

  app.get("/accessories", function(req, res) {
    if (
      req.session.user &&
      req.cookies.user_sid &&
      req.session.user.role === "2"
    ) {
      res.sendFile(path.join(__dirname, "../public/G6-HTML/accessories.html"));
    } else {
      res.redirect("/");
    }
  });

  app.get("/hardware", function(req, res) {
    if (
      req.session.user &&
      req.cookies.user_sid &&
      req.session.user.role === "2"
    ) {
      res.sendFile(path.join(__dirname, "../public/G6-HTML/hardware.html"));
    } else {
      res.redirect("/");
    }
  });

  app.get("/software", function(req, res) {
    if (
      req.session.user &&
      req.cookies.user_sid &&
      req.session.user.role === "2"
    ) {
      res.sendFile(path.join(__dirname, "../public/G6-HTML/software.html"));
    } else {
      res.redirect("/");
    }
  });

  // Render 404 page for any unmatched routes
};
