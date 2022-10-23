import {FastifyInstance} from 'fastify';
import {PASS, TOKEN, USER} from '../const';

const login = (user: string, pass: string): string => {
  if (user === USER && pass === PASS) {
    return TOKEN;
  }
  return '';
};

export default async (server: FastifyInstance): Promise<void> => {
  server.post('/login', async (request, reply) => {
    const { user, pass } = request.body as unknown as { user: string; pass: string };
    const token = login(user, pass);
    if(!token) {
      request.log.error({msg: 'Login failed', body: request.body, headers: request.headers});
    }
    reply.send({ token });
  });
};
