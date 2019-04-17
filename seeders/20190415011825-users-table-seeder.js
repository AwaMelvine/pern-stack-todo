'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Melvine',
        email: 'melvineawa@gmail.com',
        password: 'melvine',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Awa',
        email: 'awa@gmail.com',
        password: 'awa',
        createdAt : new Date(),
        updatedAt : new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
