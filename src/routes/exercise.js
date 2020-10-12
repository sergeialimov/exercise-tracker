const sequelize = require('../db/index.js');
const { Exercise } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/exercise/add',
  handler: async (request, hapi) => {
    try {
      const { userId, description, duration } = request.query;

      const exercise = await Exercise.create({
        userId,
        // date,
        duration,
        description,
      });

      return hapi.response({
        _id: exercise._id,
        userId: exercise.userId,
        date: exercise.date,
        duration: exercise.duration,
        description: exercise.description,
      }).code(200);
    } catch (err) {
      console.log(err);
    }
  },
  options: {
    description: 'Add new exercise',
    tags: [ 'api' ],
  },
};
