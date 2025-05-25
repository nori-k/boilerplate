# Backend (NestJS + Fastify + Prisma)

## 開発

```sh
pnpm start:dev
```

## Prisma

- DB接続情報は `prisma/.env` の `DATABASE_URL` を編集
- マイグレーション: `pnpx prisma migrate dev`

## tRPC型共有

- `import { AppRouter } from 'shared/trpc'` で型を利用

## 注意

- 依存管理・ビルドはルートのpnpm workspace経由で行ってください。
- Dockerビルドはルートから `docker build -f apps/backend/Dockerfile .` で実行
- 詳細はルートREADME参照。

## テスト

### 単体テスト

```sh
pnpm test
```

### E2Eテスト

```sh
pnpm test:e2e
```

### カバレッジ付きテスト

```sh
pnpm test:cov
```

## DBマイグレーション

```sh
pnpx prisma migrate dev
```

## 本番用DB接続例

`.env.example` を参照し、 `DATABASE_URL` を適切に設定してください。

## セキュリティ/運用Tips

- `.env`は必ずgit管理外にし、漏洩に注意してください。
- Docker本番運用時はsecrets/envファイルを安全に渡してください。

## Kysely型自動生成

Prismaスキーマと同期したKysely用型定義を自動生成できます。

1. DB(PostgreSQL)を起動し、`.env`の`DATABASE_URL`で接続できる状態にする
2. 下記コマンドを実行

```sh
pnpm --filter backend run generate:kysely-types
```

- `src/kysely-types.ts` が自動生成されます
- KyselyServiceで `import { DB } from './kysely-types'` として利用してください
- Prismaスキーマ変更時は再度このコマンドを実行してください
