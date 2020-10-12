const sequelize = require('../db/index.js');
const { Exercise } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/exercise/log',
  handler: async (request, hapi) => {
    try {
      const exercises = await Exercise.findAll({
        where: {
          userId: request.query.userId,
        },
      });
      return hapi.response(
      {
        user: {
          log: exercises,
          count: exercises.length,
        }
      }).code(200);
    } catch (err) {
      console.log(err);
    }
  },
  options: {
    description: 'Find exercises of user',
    tags: [ 'api' ],
  },
};
