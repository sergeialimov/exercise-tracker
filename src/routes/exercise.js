export default {
  method: 'POST',
  path: '/api/exercise/add-new',
  handler: async (request, hapi) => {

    const updatedPass = await UserService.updateUserPassword({ newPass, email });

    return hapi.response({
      statusCode: 200,
      payload: { password: { updated: true } },
      message: updatedPass.message,
    }).code(200);
  },
  options: {
    description: 'Update user password',
    tags: [ 'api' ],
  },
};
