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

## 🚀 セットアップ手順

1. **リポジトリをクローン**

   ```sh
   git clone https://github.com/yourname/monorepo-boilerplate.git
   cd monorepo-boilerplate
   ```

2. **依存関係のインストール**

   ```sh
   pnpm install
   ```

3. **DB(PostgreSQL)の起動（Docker利用推奨）**

   ```sh
   docker compose -f infra/docker/docker-compose.yml up -d db
   ```

4. **.envファイルの作成**

   各サービスの`.env.example`を参考に`.env`を作成してください。

5. **Prismaマイグレーション（初回のみ）**

   ```sh
   pnpm --filter backend exec prisma migrate dev
   ```

6. **Kysely型自動生成（Prismaスキーマ変更時）**

   ```sh
   pnpm --filter backend run generate:kysely-types
   ```

---

## 🛠️ 開発用サーバー起動

### フロントエンド（Next.js）

```sh
pnpm --filter frontend dev
```

### バックエンド（NestJS）

```sh
pnpm --filter backend start:dev
```

### Goサービス

```sh
pnpm run dev:go-service
```

### すべてのサービスをDocker Composeで一括起動

```sh
docker compose -f infra/docker/docker-compose.yml up --build
```

---

## 🧪 テスト

```sh
pnpm test
```

Goサービスのみ:

```sh
cd apps/go-service && go test
```

---

## 💡 その他

- `.env`はgit管理外です。`.env.example`を参考に各自作成してください。
- DB永続化データは`infra/db/`配下に保存されます。
- 詳細な開発・運用フローは各サービスのREADMEや`monorepo-structure.md`も参照してください。
