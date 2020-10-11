import { DataTypes } from 'sequelize';

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // We require usernames to have length of at least 3, and
        // only use letters, numbers and underscores.
        is: /^\w{3,}$/
      }
    }
  });

  return User;
}
