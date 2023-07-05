'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    appellation: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true
  })
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
