'use strict';
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/three_hours_story'
);

module.exports = {
  sequelize,
  DataTypes
};