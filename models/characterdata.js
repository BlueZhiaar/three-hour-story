'use strict';
const {sequelize,DataTypes} = require('./sequelize-loader');

const Characterdata = sequelize.define(
  'characterdatas',
  {
    character_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    character_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    story_chain: {
      type:DataTypes.STRING,
      allowNull: false
    },
    policy: {
      type:DataTypes.STRING,
      allowNull: false
    },
    luck: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    status_chain: {
      type:DataTypes.STRING,
      allowNull:false
    },
    ending: {
      type:DataTypes.STRING,
      allowNull:false
    },
    createdBy: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull:false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = Characterdata;