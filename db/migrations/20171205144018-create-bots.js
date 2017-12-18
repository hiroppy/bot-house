'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bots', {
      id: {
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
        type         : Sequelize.INTEGER
      },
      script: {
        type     : Sequelize.TEXT,
        allowNull: false
      },
      identification_word: {
        type     : Sequelize.STRING,
        allowNull: false
      },
      authority: {
        type        : Sequelize.STRING,
        defaultValue: 'editable'
      },
      description: {
        type     : Sequelize.TEXT,
        allowNull: true
      },
      user_id: {
        type     : Sequelize.STRING,
        allowNull: false
      },
      icon: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      latest_error: {
        type: Sequelize.STRING
      },
      channel_id: {
        type: Sequelize.STRING
      },
      private: {
        type        : Sequelize.BOOLEAN,
        defaultValue: false
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
      return queryInterface.addIndex('bots', ['user_id', 'channel_id']);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bots');
  }
};
