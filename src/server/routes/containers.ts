import {FastifyInstance, FastifyRequest} from 'fastify';
import {dockerCommand} from 'docker-cli-js';
import {TOKEN} from '../const';

const authMiddleware = async (request: FastifyRequest): Promise<void> => {
  if(request.headers['token'] !== TOKEN) {
    throw { code: 401, message: 'Unauthorized request' };
  }
};

export default async (server: FastifyInstance): Promise<void> => {
  server.addHook('preHandler', authMiddleware);

  server.get('/', async (request, reply) => {
    const docker = await dockerCommand('ps', {});
    reply.send(docker.containerList);
  });

  server.get('/logs/:id', async (request, reply) => {
    const {id} = request.params as unknown as { id: string };
    const docker = await dockerCommand(`logs ${id}`, {});
    reply.send(docker);
  });
};