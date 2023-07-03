'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    readertype: DataTypes.STRING,
    expirydate: DataTypes.DATEONLY
  }, {})
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
