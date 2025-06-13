import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
