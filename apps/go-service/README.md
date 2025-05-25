# Go Service

## 開発

```sh
pnpm dev:go-service
```

## テスト

```sh
go test
```

## REST API例

- GET /hello → 200 OK, "Hello, World!"

## セキュリティ/運用Tips

- `.env`やsecretsはgit管理外に
- Docker本番運用時は環境変数の安全な渡し方に注意

## .env例

GoサービスでDB接続等に使う環境変数例:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb?sslmode=disable
```

`.env.example` を参考に `.env` を作成してください。
