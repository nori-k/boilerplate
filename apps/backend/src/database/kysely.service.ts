import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// Prismaのschema.prismaに合わせて型定義を自動生成する場合はkysely-codegen等を利用
// ここではサンプルとしてusersテーブルのみ型定義
export interface DB {
  users: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
  };
  // 他のテーブルも必要に応じて追加
}

@Injectable()
export class KyselyService implements OnModuleDestroy {
  public db: Kysely<DB>;

  constructor(private readonly config: ConfigService) {
    this.db = new Kysely<DB>({
      dialect: new PostgresDialect({
        pool: new Pool({
          connectionString: this.config.get<string>('DATABASE_URL'),
        }),
      }),
    });
  }

  async onModuleDestroy() {
    await this.db.destroy();
  }
}
