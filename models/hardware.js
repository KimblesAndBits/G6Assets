/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const Hardware = sequelize.define("Hardware", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asset_tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serial_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    asset_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bin_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_assigned: DataTypes.DATE
  });
  return Hardware;
};
