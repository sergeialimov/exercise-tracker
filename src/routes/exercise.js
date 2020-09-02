export default {
  method: 'POST',
  path: '/api/exercise/add-new',
  handler: async (request, hapi) => {
    const { userId, description, duration, date } = request.payload;

    return hapi.response({
      statusCode: 200,
      payload: {
        _id: userId,
        username,
        date,
        duration,
        description,
      },
      message: 'New exercise was successfuly added',
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
