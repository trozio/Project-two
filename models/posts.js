module.exports = function(sequelize, DataTypes) {
  let Posts = sequelize.define("Posts", {
    eventName: DataTypes.STRING,
    date: DataTypes.STRING,
	time: DataTypes.INTEGER,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
	description: DataTypes.STRING,
    participants: DataTypes.STRING
});
  return Posts;
};
