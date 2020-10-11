const sequelize = require('../db/index.js');
const { User } = sequelize.default.models;

export default {
  method: 'POST',
  path: '/api/users',
  handler: async (request, hapi) => {
    const users = await User.findAll();

    return hapi.response({
      users,
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
