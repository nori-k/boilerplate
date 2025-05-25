import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
