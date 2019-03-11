module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define("Users", {
    firstName: DataTypes.STRING,
	lastName: DataTypes.STRING,
	email: DataTypes.STRING,
	photo: {
		type: DataTypes.STRING,
		allowNull: true
	},
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

  return Users;
};
