'use strict';
module.exports = (sequelize, DataTypes) => {
  var podcast = sequelize.define('podcast', {
    podcastTitle: DataTypes.STRING,
    podcastID: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    feedURL: DataTypes.STRING
  }, {});
  podcast.associate = function(models) {
    // associations can be defined here
  };
  return podcast;
};