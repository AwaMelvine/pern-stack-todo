'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Item, {
      foreignKey: 'userId',
      as: 'items',
    })
  };
  return User;
};