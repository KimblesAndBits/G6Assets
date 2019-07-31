/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //Request model info goes here
  const Requests = sequelize.define("Requests", {
    email_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asset_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    laptop_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    monitor_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    software: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessory: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Requests;
};
