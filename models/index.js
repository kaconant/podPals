'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

const sequelize = new Sequelize(process.env.POSTGRES_DB_NAME, process.env.POSTGRES_USER, process.env.POSTGRES_PASS,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    },
  });
  
  // Connect to DB
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established!');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
