module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
	email: DataTypes.STRING,
	photo: {
		type: DataTypes.STRING,
		allowNull: true
	},
    uniqueID: { type: DataTypes.STRING
    },
	tag1: {
      type: DataTypes.STRING,

  },
	tag2: {
      type: DataTypes.STRING,

  },
	tag3: {
      type: DataTypes.STRING,

  },
	tag4: {
      type: DataTypes.STRING,

  },
	tag5: {
      type: DataTypes.STRING,

  },
	tag6: {
      type: DataTypes.STRING,

  },
	tag7: {
      type: DataTypes.STRING,

  },
	tag8: {
      type: DataTypes.STRING,

  },
	tag9: {
      type: DataTypes.STRING,

  },
	tag10: {
      type: DataTypes.STRING,

  }
  });

  return Users;
};
