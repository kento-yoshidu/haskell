---
title: "Postgresメモ"
postdate: "2020-12-12"
updatedate: "2020-12-12"
categoryName: "Postgresメモ"
categorySlug: PostgresMemo
description: git log のオプションは多岐にわたります。入門書に載っている基本的で有名なものからちょっとマニアックなものまで、できるだけ例を踏まえて紹介しますので良ければ実際にコマンドを打ち込みながら読んでみてください。
---

<section class="section">

## SQLの分類

### DCL(データ制御言語)

Data **Control** Languageの略。**権限とトランザクション系**と覚える。

|SQL文|内容|
|:--|:--|
|GRANT|アクセス権限の付与|
|REVOKE|アクセス権限の取り消し|
|BEGIN|トランザクションの開始|
|COMMIT|トランザクションのコミット|
|ROLLBACK|トランザクションの取り消し|

### DDL(データ定義言語)

Data **Definition** Languageの略。**テーブルとインデックス系**と覚える。

|SQL文|内容|
|:--|:--|
|CREATE|テーブルやインデックスの作成|
|DROP|テーブルやインデックスの削除|
|ALTER|テーブルやインデックスの作成|
|TRUNCATE|全てのレコードの削除|


### DML(データ操作言語)

Data **Manipulation** Languageの略。

|SQL文|内容|
|:--|:--|
|SELECT|レコードの取得|
|INSERT|レコードの挿入|
|UPDATE|レコードの更新|
|DELETE|レコードの削除|

</section>

<section class="section">

## クラスタの作成

### 基本

以下の例では、`-D .`とすることでカレントディレクトリにクラスタを作成しています。

```console
$ initdb -D .
データベースシステム内のファイルの所有者はユーザ"kento"となります。
このユーザをサーバプロセスの所有者とする必要があります。

データベースクラスタはロケール"Japanese_Japan.932"で初期化されます。
ロケールにより暗黙的に指定される符号化方式"SJIS"はサーバ側の
符号化方式として使用できません。
デフォルトのデータベース符号化方式は代わりに"UTF8"に設定されます。
initdb: could not find suitable text search configuration for locale "Japanese_Japan.932"
デフォルトのテキスト検索構成は simple に設定されます。

データベージのチェックサムは無効です。

(略)

initdb: 警告: ローカル接続に対して"trust"認証を有効にします
pg_hba.confを編集する、もしくは、次回initdbを実行する時に -A オプション、
あるいは --auth-local および --auth-host オプションを使用することで変更する
ことがきます。

成功しました。以下のようにしてデータベースサーバを起動することができます:

    pg_ctl -D . -l ログファイル start

$ ll
total 54
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 base/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 global/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_commit_ts/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_dynshmem/
-rw-r--r-- 1 kento 197121  4410 12月 13 15:12 pg_hba.conf
-rw-r--r-- 1 kento 197121  1678 12月 13 15:12 pg_ident.conf
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_logical/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_multixact/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_notify/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_replslot/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_serial/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_snapshots/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_stat/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_stat_tmp/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_subtrans/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_tblspc/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_twophase/
-rw-r--r-- 1 kento 197121     3 12月 13 15:12 PG_VERSION
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_wal/
drwxr-xr-x 1 kento 197121     0 12月 13 15:12 pg_xact/
-rw-r--r-- 1 kento 197121    90 12月 13 15:12 postgresql.auto.conf
-rw-r--r-- 1 kento 197121 27396 12月 13 15:12 postgresql.conf

```

rootユーザではinitdbは実行できない。
また、ローカルホストでのみinitdbを実行できる。

### オプション

#### ディレクトリの指定

 - `-D ディレクトリ名`
 - `--pgdata=ディレクトリ名`

ディレクトリの指定は必須ではありません。環境変数`$PGDATA`が定義されていればそこがディレクトリになります。なお、定義されていない場合にはちゃんと以下のようにエラーになります。

```console

$ initdb

initdb: エラー: データディレクトリが指定されていません
データベースシステムのデータを格納するディレクトリを指定する必要があります。
実行時オプション -D、もしくは、PGDATA環境変数で指定してください。
```

#### エンコーディングの指定

 - `-E エンコーディング`
 - `--encoding="エンコーディング`

指定しない場合にはOSのロケールから自動的に設定される。

```postgres

# 指定しなかったとき(OSのロケールから設定される)
postgres=# \l
                                             データベース一覧
   名前    |  所有者  | エンコーディング |      照合順序      | Ctype(変換演算子)  |     アクセス権限
-----------+----------+------------------+--------------------+--------------------+-----------------------
 bookshelf | postgres | UTF8             | Japanese_Japan.932 | Japanese_Japan.932 |
 postgres  | postgres | UTF8             | Japanese_Japan.932 | Japanese_Japan.932 |
 template0 | postgres | UTF8             | Japanese_Japan.932 | Japanese_Japan.932 | =c/postgres          +
           |          |                  |                    |                    | postgres=CTc/postgres
 template1 | postgres | UTF8             | Japanese_Japan.932 | Japanese_Japan.932 | =c/postgres          +
           |          |                  |                    |                    | postgres=CTc/postgres
```

#### ロケールの指定

 - `--locale=ロケール`
 - `--no-locale`

`--no-local`とした場合はロケールが無効になる。

#### スーパーユーザを指定する

 - `-U ユーザ名`
 - `--username=ユーザ名`

指定しない場合は実行したOSのユーザ名でスーパーユーザが作成される。

# pg_ctl

> pg_ctlはPostgreSQLデータベースクラスタの初期化、PostgreSQLのデータベースサーバ（postgres）を起動、停止、再起動する、あるいは稼働中のサーバの状態を表示するためのユーティリティです。

## オプション

|オプション|内容|
|:--|:--|
|-D {パス}|ディレクトリ指定|
|-l {ログファイル}|サーバログ出力|
|-t {秒数}　--timeout={秒数}|操作が完了するまで待機する秒数。60秒|
|-s --silent|エラーメッセージのみを出力|
|-w --wait|操作が完了するのを待って、ユーザに制御を戻す。ただし、操作がタイムアウト(-tで指定化)時間までに完了しなかった場合にも、操作はバックグラウンドで実行され続ける。|
|-W --no-wait|-wの反対|

## `pg_ctl init`

initdbコマンドと動議です。

```c:\postgres>pg_ctl init -D .
データベースシステム内のファイルの所有者はユーザ"c-yoshizuke"となります。
このユーザをサーバプロセスの所有者とする必要があります。

データベースクラスタはロケール"Japanese_Japan.932"で初期化されます。
ロケールにより暗黙的に指定される符号化方式"SJIS"はサーバ側の
符号化方式として使用できません。
デフォルトのデータベース符号化方式は代わりに"UTF8"に設定されます。
initdb: could not find suitable text search configuration for locale "Japanese_Japan.932"
デフォルトのテキスト検索構成は simple に設定されます。

データベージのチェックサムは無効です。

ディレクトリ.の権限を設定しています ... ok
サブディレクトリを作成しています ... ok
動的共有メモリの実装を選択しています ... windows
デフォルトのmax_connectionsを選択しています ... 100
デフォルトの shared_buffers を選択しています ... 128MB
selecting default time zone ... Asia/Tokyo
設定ファイルを作成しています ... ok
ブートストラップスクリプトを実行しています ... ok
ブートストラップ後の初期化を実行しています ... ok
データをディスクに同期しています ... ok

initdb: 警告: ローカル接続に対して"trust"認証を有効にします
pg_hba.confを編集する、もしくは、次回initdbを実行する時に -A オプション、
あるいは --auth-local および --auth-host オプションを使用することで変更する
ことがきます。

成功しました。以下のようにしてデータベースサーバを起動することができます:

    ^"C^:^/Program^ Files^/PostgreSQL^/12^/bin^/pg^_ctl^" -D . -l ログファイル start
```

## `pg_ctl start`

```console
$ pg_ctl start -D . -l logfile

サーバの起動完了を待っています....完了
サーバ起動完了

$ cat logfile

2020-12-15 11:07:02.739 JST [11016] LOG:  PostgreSQL 12.4, compiled by Visual C++ build 1914, 64-bit を起動しています
2020-12-15 11:07:02.748 JST [11016] LOG:  IPv6アドレス"::1"、ポート5432で待ち受けています
2020-12-15 11:07:02.749 JST [11016] LOG:  IPv4アドレス"127.0.0.1"、ポート5432で待ち受けています
2020-12-15 11:07:02.903 JST [13276] LOG:  データベースシステムは 2020-12-15 11:06:23 JST にシャットダウンしました
2020-12-15 11:07:02.975 JST [11016] LOG:  データベースシステムの接続受け付け準備が整いました
```

## `pg_ctl stop`

-mオプションで停止方法を指定できます。

|オプション|名前|内容|
|:--|:--|:--|
|s smart|スマートシャットダウン|クライアントの接続、オンラインバックアップが終了した後にシャットダウンを実行|
|f fast|高速シャットダウン|クライアントの接続、オンラインバックアップは強制終了。トランザクションをロールバックし、シャットダウン実行|
|i immediate|即時シャットダウン|クリーンアップ処理なしで、即座にシャットダウンを実行|

```console
c:\postgres>pg_ctl stop -D . -m fast

2020-12-15 11:20:32.607 JST [9416] LOG:  高速シャットダウン要求を受け取りました
サーバ停止処理の完了を待っています....2020-12-15 11:20:32.792 JST [9416] LOG:  活動中の全トランザクションをアボートしています
2020-12-15 11:20:32.822 JST [9416] LOG:  バックグラウンドワーカ"logical replication launcher" (PID 14828)は終了コード1で終了しました
2020-12-15 11:20:32.841 JST [14612] LOG:  シャットダウンしています
2020-12-15 11:20:33.483 JST [9416] LOG:  データベースシステムはシャットダウンしました
完了
```

## `pg_ctl reload`

## `pg_ctl status`

```
$ pg_ctl status -D .

pg_ctl: サーバが動作中です(PID: 2152)
C:/Program Files/PostgreSQL/12/bin/postgres.exe "-D" "."
```


## 環境変数

$PGCTLTIMEOUT

$PGDATA

https://www.postgresql.jp/document/12/html/app-pg-ctl.html

# psql

## ファイル実行

$ psql -f '{ファイル名}' --file={}


## DB表示

$ psql -l --list

## コマンド実行

$ psql -c {} --command={}

$ psql -s --single-step

$ psql -1 --single-transaction

## 情報取得

\dp \z テーブル、ビュー、シーケンス、をアクっす件と共に取得

## ユーザ作成



c:\postgres>2020-12-15 13:18:03.628 JST [17224] LOG:  バックグラウンドワーカ"logical replication launcher" (PID 1972)は終了コード1で終了しました
2020-12-15 13:18:03.653 JST [3560] LOG:  シャットダウンしています
2020-12-15 13:18:03.889 JST [17224] LOG:  データベースシステムはシャットダウンしました