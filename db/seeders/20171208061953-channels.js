'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('channels', [{
      name      : 'channel-0',
      channel_id: '0000',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'channel-1',
      channel_id: '0001',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'channel-2',
      channel_id: '0002',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'channel-3',
      channel_id: '0003',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'channel-4',
      channel_id: '0004',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'channel-5',
      channel_id: '0005',
      updated_at: Sequelize.literal('NOW()')
    }, {
      name      : 'debug',
      channel_id: 'C1BLALWQ7',
      updated_at: Sequelize.literal('NOW()')
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('channels', [{}]);
  }
};
