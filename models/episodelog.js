'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Episodelog = sequelize.define(
  'episodelogs',
  {
    ending_log_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    episode_body: {
      type:DataTypes.STRING,
      allowNull: false
    },
    status:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    character_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },
  {
    freezeTableName:true,
    timestamps: false,
    indexes: [
      {
        fields: ['ending_log_id']
      }
    ]
  }
);

module.exports = Episodelog;