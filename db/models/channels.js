'use strict';
module.exports = (sequelize, DataTypes) => {
  const channels = sequelize.define('channels', {
    name      : DataTypes.STRING,
    channel_id: DataTypes.STRING
  }, {
    underscored : true,
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      }
    }
  });
  return channels;
};
