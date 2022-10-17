import fastify, {FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction} from 'fastify';
import fastifyBasicAuth from '@fastify/basic-auth';
import { dockerCommand } from 'docker-cli-js';

const validate = (username: string, password: string, req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
  console.log('validate');
  if (username === 'sudo' && password === 'HUV93DdpHWEbXPG!.y-Y') {
    done()
  } else {
    done(new Error('Winter is coming'));
  }
}

const App = async (): Promise<FastifyInstance> => {
  try {
    const server = fastify();
    await server.register(fastifyBasicAuth, { validate, authenticate: { realm: 'Westeros' } })

    server.after(() => {
      console.log('after');
      server.addHook('onRequest', server.basicAuth)

      server.get('/', async (request, reply) => {
        console.log('get');
        const docker = await dockerCommand('ps', {});
        reply.send(docker.containerList);
      });

      server.setErrorHandler((error, request, reply) => {
        console.log('error');
        const code = error.code ?? error.statusCode;
        const errorObject = { ...error, code };
        reply.code(parseInt(code) || 500).send(errorObject);
      });
    })

    return server;
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    process.exit(1);
  }
};

App().then((app) => {
  app.listen({ port: 3000, host: '0.0.0.0' }, () => {
    console.log(`server is listening on 3000`);
  });
});
