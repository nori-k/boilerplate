import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { FastifyInstance } from 'fastify';
import { appRouter, AppRouter } from 'shared/trpc';

const t = initTRPC.create();

export { appRouter, AppRouter };

export async function registerTRPCRoute(fastify: FastifyInstance) {
  await fastify.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: appRouter },
  });
}
