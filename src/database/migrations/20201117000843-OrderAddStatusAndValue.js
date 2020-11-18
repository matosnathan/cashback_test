'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Orders', 'status', {
      type: Sequelize.STRING,
      allowNull:false
    }),
    queryInterface.addColumn('Orders','totalValue', {
      type: Sequelize.DECIMAL,
      allowNull:false
    })
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
