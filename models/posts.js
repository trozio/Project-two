module.exports = function(sequelize, DataTypes) {
  let Posts = sequelize.define("Posts", {
    eventName: DataTypes.STRING,
	time: DataTypes.INTEGER,
	location: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  return Posts;
};
