module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define("Users", {
    firstName: DataTypes.STRING,
	lastName: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  return Users;
};
