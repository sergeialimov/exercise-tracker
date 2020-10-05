import { Sequelize, DataTypes } from 'sequelize';
import path from 'path';
import fs from 'fs';

const MODELS_PATH = path.join(__dirname, 'models');

const DB = async () => {
  const sequelize = new Sequelize('tracker', 'sa', '', {
    host: 'localhost',
    dialect: 'postgres',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  };

  // (async () => {
  //   await sequelize.sync({ force: true });
  //   // Code here
  // })();

  const models = {};
  fs.readdirSync(MODELS_PATH).forEach((file) => {
    // const model = sequelize.import(path.join(MODELS_PATH, file));
    const model = require(path.join(MODELS_PATH, file))(sequelize, DataTypes);
    models[model.name] = model;
  });

  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const name in models) {
    const model = models[name];
    if (model.associate) {
      model.associate(models);
    }
  }

  return {
    sequelize,
    models,
  };
};

export default DB;
