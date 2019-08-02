const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
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
