module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  });

  return User;
}
