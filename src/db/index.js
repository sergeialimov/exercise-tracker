import Sequelize from 'sequelize';

 const DB = () => {
  const sequelize = new Sequelize('tracker', 'sa', '', {
    host: 'localhost',
    dialect: 'postgres',
  });

  const connect = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  return {
    sequelize,
    connect,
  }
}

export default DB;
