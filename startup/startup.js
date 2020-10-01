import Hapi from '@hapi/hapi';
import routes from '../src/routes';

let hostName;
if (process.env.NODE_ENV === 'dev') {
  hostName = {
    host:'localhost',
  }
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    ...hostName,
  });

    server.route(routes);
    await server.start(
  );
  console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
