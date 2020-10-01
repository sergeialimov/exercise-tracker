export default {
  method: 'GET',
  path: '/api/test',
  handler: async (request, hapi) => {
    return hapi.response({
      statusCode: 200,
      payload: {
        text: 'test-ok'
      },
      message: 'that is test',
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
