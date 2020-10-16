const sequelize = require('../db/index.js');
const { User } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/exercise/new-user',
  handler: async (request, hapi) => {
    try {
      const { username } = request.payload;

      const user = await User.create({
        username,
      });

      return hapi.response({
        username: user.username,
        _id: user._id,
      }).code(200);
    } catch (err) {
      console.log(err);
    }
  },
  options: {
    description: 'Add new user',
    tags: [ 'api' ],
  },
};
