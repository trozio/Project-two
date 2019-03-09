module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstName: DataTypes.STRING,
	lastName: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;
};
