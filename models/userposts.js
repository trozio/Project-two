module.exports = function(sequelize, DataTypes) {
  let Userposts = sequelize.define("Userposts", {
    event: DataTypes.STRING,
	user: DataTypes.STRING
});
  return Userposts;
};
