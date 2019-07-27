/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //user model info goes here
  const UserHardware = sequelize.define("User_Hardware", {
    hardware_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return UserHardware;
};
