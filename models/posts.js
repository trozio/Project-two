module.exports = function(sequelize, DataTypes) {
  let Posts = sequelize.define("Posts", {
    eventName: DataTypes.STRING,
    date: DataTypes.STRING,
	time: DataTypes.STRING,
    photo: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
	description: DataTypes.STRING
});
  return Posts;
};
