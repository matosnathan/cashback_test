'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Cashback', 
      [
        {
          initialValue: 0,
          finalValue: 1000,
          percent: 10,
          createdAt: new Date().getDate(),
          updatedAt: new Date().getDate()
        },
        {
          initialValue: 1000.01,
          finalValue: 1500,
          percent: 15,
          createdAt: new Date().getDate(),
          updatedAt: new Date().getDate()
        },
        {
          initialValue: 1500.01,
          finalValue: null,
          percent: 20,
          createdAt: new Date().getDate(),
          updatedAt: new Date().getDate()
        }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
