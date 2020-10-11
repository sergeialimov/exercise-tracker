import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tracker', 'sa', '', {
  host: 'localhost',
  dialect: 'postgres',
});

// (async () => {
//   await sequelize.sync({ force: true });
// })();

const modelDefiners = [
  require('./models/User.js'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


export default sequelize;
