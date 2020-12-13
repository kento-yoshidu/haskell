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
