/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  //user model info goes here
  const UserSoftware = sequelize.define("User_Software", {
    software_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return UserSoftware;
};
