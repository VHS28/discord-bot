import Fastify from 'fastify';
import { registerHealthRoutes } from './routes/health.js';
import { registerPublicRoutes } from './routes/public.js';

export function createServer() {
  const server = Fastify({
    logger: true,
  });

  registerHealthRoutes(server);
  registerPublicRoutes(server);

  server.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    reply.status(500).send({
      error: 'internal_server_error',
    });
  });

  return server;
}