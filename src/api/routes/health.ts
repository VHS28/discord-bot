import { FastifyInstance } from 'fastify';

export function registerHealthRoutes(server: FastifyInstance) {
  server.get('/health', async () => {
    return {
      ok: true,
    };
  });
}