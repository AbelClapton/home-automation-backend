const { Sequelize } = require("sequelize")

const host = process.env.DB_HOST
const database = process.env.DB_DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: "mysql",
	logging: (...msg) => console.log(msg)
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize }
