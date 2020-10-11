const sequelize = require('../db/index.js');
const { User } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/exercise/new-user',
  handler: async (request, hapi) => {
    const { username } = request.query;

    await User.create({
      username,
    })

    return hapi.response({
      username,
      _id: Math.random().toString(36).substring(7),
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
