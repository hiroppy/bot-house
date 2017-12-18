'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('channels', {
      id: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      name: {
        type     : Sequelize.STRING,
        unique   : true,
        allowNull: false
      },
      channel_id: {
        type     : Sequelize.STRING,
        unique   : true,
        allowNull: false
      },
      created_at: {
        allowNull   : false,
        type        : Sequelize.DATEONLY,
        defaultValue: Sequelize.literal('NOW()')
      },
      updated_at: {
        allowNull: false,
        type     : Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.addIndex('channels', ['channel_id']);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('channels');
  }
};
