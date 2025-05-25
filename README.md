# Monorepo Boilerplate

## 構成

- apps/frontend: Next.js (tRPC/RESTクライアント)
- apps/backend: NestJS + Fastify + Prisma (tRPC/RESTサーバー)
- apps/go-service: Go RESTサービス
- packages/shared: tRPC型共有
- infra/docker: Docker Compose

## 前提

- Node.js, pnpm, Goは[mise](https://github.com/jdx/mise)で管理・有効化してください。
  - 例: `mise use -g node@lts` でpnpmも有効化されます。
- Dockerはローカルで利用可能な状態にしてください。

## 開発手順

### 1. 依存関係インストール

```sh
pnpm install
```

### 2. サービス起動

- Next.js: `pnpm --filter frontend dev`
- NestJS: `pnpm --filter backend start:dev`
- Go: `cd apps/go-service && go run main.go`
- Docker Compose: ルートから `docker compose -f infra/docker/docker-compose.yml up --build`
  - **Dockerfileのビルドは必ずルートから `docker build -f apps/backend/Dockerfile .` のように実行してください。**

### 3. Prisma

- DBスキーマ編集: `apps/backend/prisma/schema.prisma`
- マイグレーション: `pnpx prisma migrate dev`
- DB接続情報: `apps/backend/prisma/.env` の `DATABASE_URL` を編集
  - 例: `DATABASE_URL="postgresql://user:password@localhost:5432/mydb"` のように設定

### 4. tRPC型共有

- `packages/shared/trpc.ts`を各サービスで`import { AppRouter } from 'shared/trpc'`で利用（パスエイリアス設定済み）

---

- turbo/pnpm workspace/tsconfigのパスエイリアスは全て設定済みです。
- 不要なnode_modulesやpnpm-lock.yamlは各サービス直下に作成しないよう注意してください。
- 各サービスの詳細はそれぞれのディレクトリ内READMEやコードコメントを参照してください。
