'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bots', [{
      script: `(() => {
  if (TEXT === 'test') return 'yay!';
})();`,
      identification_word: 'test',
      user_id            : '0',
      icon               : ':ok_woman:',
      name               : 'checker',
      channel_id         : '1',
      created_at         : Sequelize.literal('NOW()'),
      updated_at         : Sequelize.literal('NOW()')
    }, {
      script: `(() => {
  return \`https://chart.yahoo.co.jp/?code=998407.O&tm=1d&_ts=${Date.now()}\`;
})();`,
      identification_word: 'nikkei',
      user_id            : '0',
      icon               : ':blush:',
      name               : 'nikkei-stock-average',
      channel_id         : '1',
      created_at         : Sequelize.literal('NOW()'),
      updated_at         : Sequelize.literal('NOW()')
    }, {
      script: `(async () => {
  const code = await fetch('https://en.wikipedia.org/wiki/JavaScript')
    .then((res) => res.status);
  return code;
})();`,
      identification_word: 'js',
      user_id            : '0',
      icon               : 'http://placehold.jp/29abcc/ffffff/150x150.png',
      name               : 'javascript',
      channel_id         : '2',
      created_at         : Sequelize.literal('NOW()'),
      updated_at         : Sequelize.literal('NOW()')
    }, {
      script: `const list = [
  'cat',
  'dog',
  'bird'
];

(() => {
  return list[Math.floor((Math.random() * 3))];
})();`,
      identification_word: 'random',
      user_id            : '0',
      icon               : ':cat:',
      name               : 'random',
      channel_id         : '3',
      created_at         : Sequelize.literal('NOW()'),
      updated_at         : Sequelize.literal('NOW()')
    }]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('bots', [{}]);
  }
};
