'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Ending = sequelize.define(
  'endings',
  {
    ending_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ending_body: {
      type:DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName:true,
    timestamps: false,
    indexes: [
      {
        fields: ['ending_id']
      }
    ]
  }
);

module.exports = Ending;