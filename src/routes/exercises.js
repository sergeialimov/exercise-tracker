const sequelize = require('../db/index.js');
const { Exercise } = sequelize.default.models;

export default {
  method: 'GET',
  path: '/api/exercises',
  handler: async (request, hapi) => {

    const exercises = await Exercise.findAll();

    return hapi.response(exercises).code(200);
  },
  options: {
    description: 'Find all exercises',
    tags: [ 'api' ],
  },
};
