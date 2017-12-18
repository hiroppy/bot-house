'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      real_name: {
        type     : Sequelize.STRING,
        allowNull: false
      },
      icon: {
        type     : Sequelize.STRING,
        allowNull: false
      },
      user_id: {
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
      return queryInterface.addIndex('users', ['user_id']);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
