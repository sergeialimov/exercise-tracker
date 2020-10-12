import { Sequelize } from 'sequelize';
import db from '../../config/credentials.js';

const config = (process.env.NODE_ENV === 'dev') ? db.local : db.heroku;

const { dbName, user, password, host } = config;


const sequelize = new Sequelize(dbName, user, password, {
  host,
  dialect: 'postgres',
});

(async () => {
  await sequelize.sync({ force: true });
})();

const modelDefiners = [
  require('./models/User.js'),
  require('./models/Exercise.js'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


export default sequelize;
