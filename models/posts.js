module.exports = function(sequelize, DataTypes) {
  let Posts = sequelize.define("Posts", {
    eventName: DataTypes.STRING,
    date: DataTypes.STRING,
	time: DataTypes.STRING,
    photo: DataTypes.STRING,
    location: DataTypes.STRING,
  description: DataTypes.STRING,
  longitutde: DataTypes.STRING,
  latitude: DataTypes.STRING
});
  return Posts;
};
