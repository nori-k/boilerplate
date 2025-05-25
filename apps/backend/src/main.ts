import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { registerTRPCRoute } from './trpc';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await registerTRPCRoute(app.getHttpAdapter().getInstance());
  await app.listen(4000, '0.0.0.0');
}
bootstrap();
