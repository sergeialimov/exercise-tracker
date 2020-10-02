export default {
  method: 'POST',
  path: '/api/exercise/new-user',
  handler: async (request, hapi) => {
    const { username } = request;

    return hapi.response({
      username,
      _id: 1,
      message: 'User successfuly created',
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
