const sequelize = require('../db/index.js');
const { User } = sequelize.default.models;

export default {
  method: 'GET',
  path: '/api/exercise/users',
  handler: async (request, hapi) => {
    const users = await User.findAll();

    return hapi.response({
      users,
    }).code(200);
  },
  options: {
    description: 'Find all users',
    tags: [ 'api' ],
  },
};
