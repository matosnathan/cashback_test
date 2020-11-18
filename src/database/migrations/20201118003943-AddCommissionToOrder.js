'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Orders', 'commission', {
      type: Sequelize.DECIMAL
    }),
    queryInterface.addColumn('Orders', 'commissionPercent', {
      type: Sequelize.INTEGER
    })
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
