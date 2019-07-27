/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //user model info goes here
  const Accessory = sequelize.define("Accessory", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessory_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity_available: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bin_location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Accessory;
};
