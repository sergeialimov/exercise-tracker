module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  return User;
}
