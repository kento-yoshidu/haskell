---
title: postgres.confファイル
postdate: "2021-01-09"
updatedate: "2021-01-09"
categoryName: "ハンズオンPostgreSQL"
categorySlug: "HandsonPostgreSQL"
---

# postgres.conf

initdb実行時に作成されます。

## サーバの動作関係

|パラメータ|内容|デフォルト|
|:--|:--|:--|
|listen_address|Postgresサーバ自身のIPアドレス|localhost|
|log_connections|待ち受けポート番号|5432|
|max_connections|サーバへの最大同時接続数|100|

上記設定は**Postgresサーバの再起動のみ**によって、設定変更が反映されます。
※postgres.confの再読み込みやSETコマンドの実行によって変更されない。


## ログ関係

|パラメータ|内容|
|:--|:--|
|logging_collector|標準エラーをファイルに書き出すかどうか|
|log_connections|クライアントの認証、サーバへの接続など、クライアントに関するログを出力するかどうか|
|log_min_messages|出力するログレベルを指定※後述|
|log_line_prefix|ログの行頭にユーザ名やDB名などの情報を付与する|

INFO…ユーザから出力を要求された情報
NOTICE…ユーザにとって役立つ情報
WARNING…不適切なコマンド使用等に対するユーザへの警告
ERROR…特定のコマンドを中断させたエラー
LOG…データベース管理者にとって役立つ、パフォーマンスや内部の処理に関する情報
FATAL…特定のセッションを中断させたエラー
PANIC…全てのセッションを中断させた致命的なエラー

## その他

### default_transaction_isolation

新しいトランザクションの分離レベルを設定します。

postgres.confの再読み込み、SETコマンドで設定の繁栄が可能です。

READ UNCOMMITED

**コミットされていない**変更を他のトランザクションから参照できます。なお、コミットされていない変更を読み取ってしまうことを**ダーディリード**といいます。

READ COMMITTED

**コミットされた**変更を他のトランザクションから参照できます。postgres.sqlにおけるデフォルトのレベルです。

REPEATABLE READ

## SETコマンドによる設定の変更

**コミットされた追加・変更**を他のトランザクションから参照できます。

セッション内でのみ有効です。切断してしまえば元に戻ります。

## ALTER SYSTEM

サーバのパラメータ値を書き換えます。コマンド実行後、`postgresql.auto.conf`ファイルに内容が書き込まれ、`postgresql.conf`の次回読み込み時に上書きされます。


## システムカタログ





## pg_settingsビュー

pg_settingsはサーバの実行時パラメータを取得できるビューです。
中でもcontextカラムは**パラメータを変更するために必要な動作**が記載されています。

|値|内容|
|:--|:--|
|internal|変更不可。再度サーバを構築する必要がある|
|postmaster|PostgreSQLサーバ起動時にのみ適用|
|sighup|postgresql.confの再読み込み|
|superuser|スーパーユーザのSETコマンド|
|user|一般ユーザのSETコマンド|
|superuser-backend|スーパーユーザが新しいセッションを開始|
|backend|一般ユーザが新しいセッションを開始|


https://sites.google.com/site/kojimemos/home/mysql/toranzakushon/toranzakushon-fen-lireberu

https://www.postgresql.jp/document/12/html/view-pg-settings.html
