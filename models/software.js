/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //user model info goes here
  const Software = sequelize.define("Software", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    license_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    license_available: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Software;
};
