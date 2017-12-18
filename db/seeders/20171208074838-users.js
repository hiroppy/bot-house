'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      real_name : 'user-0',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      user_id   : '0',
      updated_at: Sequelize.literal('NOW()')
    }, {
      real_name : 'user-1',
      user_id   : '1',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      updated_at: Sequelize.literal('NOW()')
    }, {
      real_name : 'user-2',
      user_id   : '2',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      updated_at: Sequelize.literal('NOW()')
    }, {
      real_name : 'user-3',
      user_id   : '3',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      updated_at: Sequelize.literal('NOW()')
    }, {
      real_name : 'user-4',
      user_id   : '4',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      updated_at: Sequelize.literal('NOW()')
    }, {
      real_name : 'user-5',
      user_id   : '5',
      icon      : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      updated_at: Sequelize.literal('NOW()')
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', [{}]);
  }
};
