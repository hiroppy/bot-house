'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('bots', 'storage', Sequelize.JSON);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('bots', 'storage');
  }
};
