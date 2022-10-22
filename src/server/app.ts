import fastify, { FastifyInstance } from 'fastify';
import staticPlugin from '@fastify/static';
import AuthRouter from './routes/login';
import ContainersRouter from './routes/containers';

const App = async (): Promise<FastifyInstance> => {
  try {
    const server = fastify();
    server.register(staticPlugin, { root: __dirname, prefix: '/' });

    server.get('/', (req, reply) => {
      reply.sendFile('index.html', {cacheControl: false});
    });

    server.register(AuthRouter, { prefix: '/auth' });
    server.register(ContainersRouter, { prefix: '/containers' });

    server.setErrorHandler((error, request, reply) => {
      const code = error.code ?? error.statusCode;
      const errorObject = {...error, code};
      reply.code(parseInt(code) || 500).send(errorObject);
    });

    return server;
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    process.exit(1);
  }
};

App().then((app) => {
  app.listen({port: 3000, host: '0.0.0.0'}, () => {
    console.log('server is listening on 3000');
  });
});
