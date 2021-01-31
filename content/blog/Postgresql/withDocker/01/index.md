---
title: PostgreSQLをDokcerで使う
postdate: "2021-01-27"
updatedate: "2021-01-27"
categoryName: "ハンズオンPostgreSQL"
categorySlug: "HandsonPostgreSQL"
tags: ["PostgreSQL", "Docker"]
---

## apline版のDockerファイルを落とす

```shell
$ docker pull postgres:apline
alpine: Pulling from library/postgres

(略)

$ docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
postgres      alpine    91aed320ad01   5 days ago      160MB
```

## コンテナを起動する

カレントコマンドを実行するディレクトリにdataフォルダを作っておきます。


```shell
$ docker run --name postgres --rm -d -p 11111:5432 \
    -v data:/var/lib/postgres/data \
    -e POSTGRES_PASSWORD=decjapan \
    postgres:alpine

$ docker container ls

CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                     NAMES
3fdd895b7ee7   postgres:alpine   "docker-entrypoint.s…"   14 seconds ago   Up 14 seconds   0.0.0.0:11111->5432/tcp   postgres
```



