require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public/G6-HTML"));
app.use(cookieParser());
app.use(
  session({
    // eslint-disable-next-line camelcase
    key: "user_sid",
    secret: "thereisnospoon",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 600000
    }
  })
);
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
