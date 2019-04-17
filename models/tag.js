'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Item, {
      through: 'TagItem',
      foreignKey: 'tagId',
      as: 'items',
    });
  };
  return Tag;
};