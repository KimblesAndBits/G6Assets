/* eslint-disable indent */
/* eslint-disable camelcase */
const db = require("../models");
const Cookies = require("js-cookie");

module.exports = function (app) {
  // Register a new User
  app.get("/api/examples", function (req, res) {
    db.User.find({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/assign", function (req, res) {
    let newAsset = req.body;
    let newAssetAssignment = {};
    switch (newAsset.type) {
      case "hardware":
        newAssetAssignment = {
          hardware_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserHardware.create(newAssetAssignment).then(function (dbExample) {
          res.json(dbExample);
        });
        break;
      case "software":
        newAssetAssignment = {
          software_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserSoftware.create(newAssetAssignment).then(function (dbExample) {
          res.json(dbExample);
        });
        break;
      case "accessory":
        newAssetAssignment = {
          accessory_id: newAsset.assetId,
          user_id: newAsset.userID
        };
        db.UserAccessory.create(newAssetAssignment).then(function (dbExample) {
          res.json(dbExample);
        });
    }
  });

  // Delete an example by id
  app.delete("/api/delete/user/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/register", (req, res) => {
    let newUser = req.body;
    db.User.create(newUser).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.post("/add", (req, res) => {
    let newAsset = req.body;
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
    };
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
