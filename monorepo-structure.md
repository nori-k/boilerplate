# Monorepo structure for Next.js (frontend), NestJS (backend), Go microservices, and shared packages

```text
apps/
  frontend/      # Next.js app (TypeScript, tRPC, REST, Tailwind, React Query)
    app/         # Next.js app directory (pages, layouts, etc.)
    public/      # 静的ファイル
    trpc.ts      # tRPCクライアント設定
    sample.test.ts # Vitestテスト雛形
    ...
  backend/       # NestJS app (Fastify, Prisma, tRPC, REST)
    src/
      app.module.ts
      hello.controller.ts
      main.ts
      trpc.ts
      database/
        prisma.module.ts
        prisma.service.ts
        kysely.service.ts
        kysely-types.ts # Prismaスキーマから自動生成されるKysely型
    prisma/
      schema.prisma
      .env           # DB接続情報
      .env.example   # 本番用サンプル
    app.e2e-spec.ts  # Jest E2Eテスト雛形
    jest.config.js
    ...
  go-service/    # Goマイクロサービス（REST API雛形）
    main.go
    main_test.go
    go.mod
    ...

packages/
  shared/        # TypeScript型・tRPCルーター共有
    trpc.ts
    sample.test.ts
    vitest.config.ts
    ...

infra/
  db/            # DB関連（マイグレーション等）
  docker/        # Docker Compose, サービス用Dockerfile
    docker-compose.yml

.github/
  copilot-instructions.md # Copilotカスタム指示
  workflows/
    ci.yml        # GitHub Actions CI/CD

.vscode/
  tasks.json      # VSCodeタスク（dev, build, docker compose等）

README.md        # プロジェクト全体説明
.mise.toml       # mise言語バージョン管理
pnpm-workspace.yaml # pnpmワークスペース設定
turbo.json       # turboパイプライン（dev, build, test, typecheck, format, lint, etc.）
tsconfig.json    # ルートTypeScript設定

---

- 各サービスはstrictな型安全・テスト・CI/CD・Docker本番運用・型共有・自動化に対応
- Prismaスキーマ変更時は `pnpm --filter backend run generate:kysely-types` でKysely型を自動生成
- `infra/db/` はPostgreSQLのデータ永続化専用ディレクトリ（git管理外）。
- .env.exampleは各サービスに配置し、.envはgit管理外。
- DB層（backend/src/database/）はPrisma/Kysely両対応で型安全・柔軟なDB操作が可能。
- lockファイルはルートのみ。apps/packages配下に個別lockは作成しない。
- 詳細は各READMEやinfra/README、copilot-instructions.md参照
```
