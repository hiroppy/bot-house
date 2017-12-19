'use strict';
module.exports = (sequelize, DataTypes) => {
  const bots = sequelize.define('bots', {
    script             : DataTypes.TEXT,
    identification_word: DataTypes.STRING,
    authority          : DataTypes.STRING,
    description        : DataTypes.TEXT,
    user_id            : DataTypes.STRING,
    icon               : DataTypes.STRING,
    name               : DataTypes.STRING,
    latest_error       : DataTypes.STRING,
    channel_id         : DataTypes.STRING,
    private            : DataTypes.BOOLEAN,
    storage            : DataTypes.JSON
  }, {
    underscored : true,
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      }
    }
  });
  return bots;
};
