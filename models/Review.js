'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User);
    Review.belongsTo(models.Podcast);
  };
  return Review;
};