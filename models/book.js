'use strict'
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    YearPublished: DataTypes.DATEONLY,
    Language: DataTypes.STRING,
    ISBN: DataTypes.STRING
  }, {})
  Book.associate = function (models) {
    // associations can be defined here
  }
  return Book
}
