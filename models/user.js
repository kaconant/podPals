'use strict';

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        github_id: Sequelize.STRING,
    });

User.associate = function(models) {
    // Associations
    User.hasMany(models.Review);    
    }
    return User;
};

