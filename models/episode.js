'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Episode = sequelize.define(
  'episodes',
  {
    episode_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    episode_body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['episode_id']
      }
    ]
  }
);

module.exports = Episode;