import Hapi from '@hapi/hapi';
const routes = require('../src/routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

    await server.start({
    routes,
  });
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
