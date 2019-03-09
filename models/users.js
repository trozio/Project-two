module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;
};
