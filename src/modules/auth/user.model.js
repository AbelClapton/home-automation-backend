const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
		validate: {
			min: 3,
			max: 50,
		},
  },
  email: {
    type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
			min: 5,
			max: 255,
		},
  },
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 3,
			max: 255,
		},
	},
	isAdmin: Boolean,
}, {
  // Other model options go here
});

module.exports = { User }
