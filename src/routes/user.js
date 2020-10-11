const sequelize = require('../db/index.js');
const { User } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/exercise/new-user',
  handler: async (request, hapi) => {
    const { username } = request.query;

    const user = await User.create({
      username,
    });

    return hapi.response({
      username: user.username,
      _id: user._id,
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
