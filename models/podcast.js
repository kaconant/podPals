'use strict';
module.exports = (sequelize, DataTypes) => {
  var Podcast = sequelize.define('Podcast', {
    podcastTitle: DataTypes.STRING,
    podcastID: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    feedURL: DataTypes.STRING
  }, {});
  Podcast.associate = function(models) {
    // associations can be defined here
    Podcast.hasMany(models.Review);
  };
  return Podcast;
};