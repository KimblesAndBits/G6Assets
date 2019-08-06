/* eslint-disable indent */
/* eslint-disable camelcase */
const db = require("../models");
const sessionChecker = require("./../public/G6-HTML/js/sessionChecker");

module.exports = function(app) {
  // ========= CREATE ==========
  app.get("/api/currentUser", (req, res) => {
    res.json(req.session.user);
  });

  app.post("/api/assign", function(req, res) {
    let newAsset = req.body;
    let newAssetAssignment = {};
    switch (newAsset.type) {
      case "hardware":
        newAssetAssignment = {
          hardware_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserHardware.create(newAssetAssignment).then(function(dbExample) {
          res.json(dbExample);
        });
        break;
      case "software":
        newAssetAssignment = {
          software_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserSoftware.create(newAssetAssignment).then(function(dbExample) {
          res.json(dbExample);
        });
        break;
      case "accessory":
        newAssetAssignment = {
          accessory_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserAccessory.create(newAssetAssignment).then(function(dbExample) {
          res.json(dbExample);
        });
    }
  });

  app.post("/api/register", (req, res) => {
    let newUser = req.body;
    db.User.create(newUser).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.post("/api/add", (req, res) => {
    let formInfo = req.body;
    console.log(req.body);

    // get type of asset being added
    switch (formInfo.assetType) {
      case "Hardware":
        let newHardware = {
          manufacturer: formInfo.manufacturer,
          asset_tag: formInfo.asset_tag,
          serial_number: formInfo.serial_number,
          model: formInfo.model,
          asset_type: formInfo.assetType,
          status: formInfo.status,
          eol: formInfo.eol,
          bin_location: formInfo.bin_location,
          user_id: "1",
          date_assigned: null
        };
        db.Hardware.create(newHardware).then(dbUser => {
          res.json(dbUser);
        });
        break;
      case "Software":
        let newSoftware = {
          manufacturer: formInfo.manufacturer,
          product: formInfo.product,
          product_key: formInfo.product_key,
          expiration_date: formInfo.expiration_date,
          license_size: formInfo.license_size,
          license_available: formInfo.license_available
        };
        db.Software.create(newSoftware).then(dbUser => {
          res.json(dbUser);
        });
        break;
      case "Accessory":
        let newAccessory = {
          manufacturer: formInfo.manufacturer,
          model: formInfo.model,
          accessory_type: formInfo.accessory_type,
          quantity_available: formInfo.accessory_type,
          bin_location: formInfo.bin_location
        };
        db.Accessory.create(newAccessory).then(dbUser => {
          res.json(dbUser);
        });
        break;
      default:
        console.log("No assets added");
    }
  });

  app.post("/api/request", (req, res) => {
    let newRequest = req.body;
    console.log(newRequest);
    db.Requests.create(newRequest).then(dbUser => {
      res.json(dbUser);
    });
  });

  app
    .route("/api/login")
    .get(sessionChecker, (req, res) => {
      res.json("/");
    })
    .post((req, res) => {
      let username = req.body.username;
      let password = req.body.password;

      db.User.findOne({ where: { username: username } }).then(function(user) {
        if (!user) {
          res.json("/");
        } else if (user.password !== password) {
          res.json("/");
        } else {
          req.session.user = user.dataValues;
          console.log(req.session.user);
          if (user.role === "1") {
            res.json("/user");
          } else {
            res.json("/admin");
          }
        }
      });

      // =========== READ ==============

      // Get all accessories
      app.get("/api/all-users", function(req, res) {
        db.User.findAll().then(function(results) {
          res.json(results);
        });
      });

      app.get("/api/user/:name", function(req, res) {
        db.User.findOne({ where: { name: req.params.name } }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/all-accessories", function(req, res) {
        db.Accessory.findAll().then(function(results) {
          res.json(results);
        });
      });

      app.get("/api/recent-accessories", function(req, res) {
        db.Accessory.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-accessories/:id", function(req, res) {
        db.Accessory.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-accessories-ids/:id", function(req, res) {
        db.User_Accessory.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });

      // Get all hardware
      app.get("/api/all-hardware", function(req, res) {
        db.Hardware.findAll().then(function(results) {
          res.json(results);
        });
      });

      app.get("/api/recent-hardware", function(req, res) {
        db.Hardware.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-hardware/:id", function(req, res) {
        db.Hardware.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-hardware-ids/:id", function(req, res) {
        db.User_Hardware.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });

      // Get all software
      app.get("/api/all-software", function(req, res) {
        db.Software.findAll().then(function(results) {
          res.json(results);
        });
      });

      app.get("/api/recent-software", function(req, res) {
        db.Software.findAll({ order: ["updatedAt"], limit: 5 }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-software/:id", function(req, res) {
        db.Software.findOne({ where: { id: req.params.id } }).then(function(
          results
        ) {
          res.json(results);
        });
      });

      app.get("/api/user-software-ids/:id", function(req, res) {
        db.User_Software.findAll({ where: { user_id: req.params.id } }).then(
          function(results) {
            res.json(results);
          }
        );
      });

      app.get("/api/logout", (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
          res.clearCookie("user_sid");
          res.json("/");
        } else {
          res.json("/");
        }
      });

      // =========== UPDATE ==============

      // =========== DELETE ==============

      // Delete an example by id
      app.delete("/api/delete/user/:id", function(req, res) {
        db.User.destroy({ where: { id: req.params.id } }).then(function(
          dbExample
        ) {
          res.json(dbExample);
        });
      });
    });
};
