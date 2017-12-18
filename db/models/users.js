'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    icon     : DataTypes.STRING,
    user_id  : DataTypes.STRING,
    real_name: DataTypes.STRING
  }, {
    underscored : true,
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      }
    }
  });
  return users;
};
