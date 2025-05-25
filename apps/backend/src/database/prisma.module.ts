// このモジュールはDB層の依存を一元管理します。
// PrismaService: Prisma ORMによる型安全なDB操作
// KyselyService: 複雑なクエリや集計に強いKyselyクエリビルダー
// どちらもDIで利用可能です。
// Prismaスキーマ変更時はKysely型も自動生成してください。

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { KyselyService } from './kysely.service';

@Module({
  providers: [PrismaService, KyselyService],
  exports: [PrismaService, KyselyService],
})
export class PrismaModule {}
