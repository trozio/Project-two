module.exports = function(sequelize, DataTypes) {
  let Posts = sequelize.define("Posts", {
    eventName: DataTypes.STRING,
	time: DataTypes.INTEGER,
	location: DataTypes.STRING,
    description: DataTypes.TEXT,
	tag1: {
      type: DataTypes.BOOLEAN,
      
  },
	tag2: {
      type: DataTypes.BOOLEAN,

  },
	tag3: {
      type: DataTypes.BOOLEAN,

  },
	tag4: {
      type: DataTypes.BOOLEAN,

  },
	tag5: {
      type: DataTypes.BOOLEAN,

  },
	tag6: {
      type: DataTypes.BOOLEAN,

  },
	tag7: {
      type: DataTypes.BOOLEAN,

  },
	tag8: {
      type: DataTypes.BOOLEAN,

  },
	tag9: {
      type: DataTypes.BOOLEAN,

  },
	tag10: {
      type: DataTypes.BOOLEAN,

  }
});


  return Posts;
};
