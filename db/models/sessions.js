'use strict';
module.exports = (sequelize, DataTypes) => {
  const sessions = sequelize.define('sessions', {
    session_id: DataTypes.STRING,
    expires   : DataTypes.DATE,
    user_id   : DataTypes.STRING
  }, {
    underscored : true,
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      }
    }
  });
  return sessions;
};
