'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    completed: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Tag, {
      through: 'TagItem',
      foreignKey: 'itemId',
      as: 'tags',
    });
  };
  return Item;
};