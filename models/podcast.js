'use strict';
module.exports = (sequelize, DataTypes) => {
  var Podcast = sequelize.define('Podcast', {
    title: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    feedURL: DataTypes.STRING
  }, {});
  Podcast.associate = function(models) {
    // associations can be defined here
  };
  return Podcast;
};