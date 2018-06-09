module.exports = (sequelize, DataTypes) => {
    var Review = sequelize.define('Post', {
        title: DataTypes.STRING
    }, {});
    Review.associate = function(models) {
        // associations can be defined here
    };
    return Review;
    };