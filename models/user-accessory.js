/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //user model info goes here
  const UserAccessory = sequelize.define("User_Accessory", {
    software_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return UserAccessory;
};
