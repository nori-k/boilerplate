<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# このリポジトリの開発方針・技術スタック

- **Monorepo構成**: apps(backend, frontend, go-service), packages(shared), infra(docker, db)
- **フロントエンド**: Next.js (TypeScript, tRPC, REST, Tailwind, React Query)
- **バックエンド**: NestJS (TypeScript, Fastify, Prisma, REST, tRPC)
- **Goサービス**: 標準net/httpによるREST API
- **ORM**: Prisma (DBスキーマはprisma/schema.prisma)
- **パッケージ管理**: pnpm (pnpm-workspace.yamlで管理)
- **バージョン管理**: mise (Node.js, Go, pnpm)
- **コンテナ**: Docker (本番はdistroless, builder/testはslim)
- **CI/CD**: GitHub Actions (lint, format, build, test)
- **Lint/Format**: ESLint, Prettier
- **型共有**: packages/shared/trpc.tsをtsconfigのパスエイリアス(shared/\*)でimport
- **タスク管理**: turbo.json, .vscode/tasks.json

# コーディング規約・生成方針

- すべてTypeScript/Goのstrictな型安全を重視
- tRPCの型定義・ルーターは必ずsharedパッケージで一元管理
- importはパスエイリアス(shared/\*)を優先し、相対パスは避ける
- Prismaの型やクライアントも必要に応じてsharedでexport
- REST/tRPC両対応のAPI設計例を優先的に提示
- Dockerfileはマルチステージ・distroless本番・slimビルダーを推奨
- pnpm workspaceのルートで依存管理・ビルドを行う
- Lint/Format/CI/CDの自動化を前提としたコード例を生成
- Goサービスはgo.modで依存管理、必要ならgo getを明記
- VSCodeタスクやREADMEの記述例も積極的に生成
- .envやDB接続情報は必ず外部ファイルで管理し、コードに直書きしない
- テストや型チェック、CI/CDの自動化例も積極的に提示

# 参考

- 生成コードは必ずこの構成・規約に従うこと
- 迷った場合はmonorepoのベストプラクティス・公式ドキュメントを参照
- 生成例にはコメントや補足説明も付与すること

---

このリポジトリはNext.js, NestJS, Go, Prisma, Fastify, tRPC, REST, mise, Docker, turbo, pnpm, GitHub Actions, ESLint, Prettierを利用した本格的なmonorepoボイラープレートです。
