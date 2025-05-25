# infra ディレクトリについて

- `infra/docker/docker-compose.yml` で全サービス・DB(PostgreSQL)を一括起動できます。
- `infra/db/` はPostgreSQLのデータ永続化専用ディレクトリです。
  - バイナリや巨大ファイルが生成されるため、`.gitignore`で除外しています。
  - 誤ってコミットしないようご注意ください。

## DB永続化の運用

- データベースの永続化は `infra/db/` 配下に保存されます。
- データを初期化したい場合は `infra/db/` 配下のファイルを削除してください（※本番運用時は要注意）。

## その他

- DockerやDBの設定は各サービスのREADMEも参照してください。
