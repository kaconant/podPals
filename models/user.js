const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/podpals')

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    github_id: Sequelize.STRING,
});

// only need to run this once
User.sync();

module.exports = User;