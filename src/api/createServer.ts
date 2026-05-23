import Fastify from 'fastify';
import { registerHealthRoutes } from './routes/health.js';
import { registerPublicRoutes } from './routes/public.js';
import fastifyStatic from '@fastify/static';
import path from 'node:path';

export function createServer() {
  const server = Fastify({
    logger: true,
  });

  server.register(fastifyStatic, {
    root: path.join(process.cwd(), 'public'),
    prefix: '/',
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