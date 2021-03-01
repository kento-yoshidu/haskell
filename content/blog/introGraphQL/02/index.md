---
title: "#2 graphql-yoga🧘でローカルサーバを立てる(後編)"
postdate: "2021-03-01"
updatedate: "2021-03-01"
categoryName: "入門GraphQL"
categorySlug: introGraphQL
tags: ["GraphQL", "GraphQL-Yoga", "入門"]
---

# graphql-yogaで各種DBに接続する

前回までで

各種、といってもMongoDBとPostgrSQLの2つのみですが、、、

## 環境

ここで「DBはDockerを使って…」などとやり出すと横道に逸れるので、今回はWindowsに直接MongoDBないしPostgreSQLを入れていることを前提とします。

MongoDBのインストール方法はこちら、postgreSQLのインストール方法はこちらを参照ください。

## ライブラリのインストール

まずは新規にフォルダを作成します。私は`graphqldb`などとしました。

フォルダ内に入り、主役のgraphql-yogaとMongoDBに接続するモジュールである**mongoose**（マングース）をインストールします。

```shell
$ yarn init -y

$ yarn add graphql-yoga mongoose

$ cat package.json
{
  "name": "graphqldb",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "graphql": "^15.5.0",
    "mongoose": "^5.11.18"
  }
}
```

index.jsを作成。まずはローカルにサーバを立てるところまでやっておきましょう。

## MongoDBでコレクションを作成する

DB名は`graphqlTest`、コレクション名は`users`とします。とりあえず、2件のドキュメントを保存します。

スキーマは数値型のidと、文字列型のnameの2つです。

```shell
> use graphqlTest
switched to db graphqlTest

> db.users.insert(
  {
    "id": 1,
    "name": "kento"
  },
  {
    "id": 2,
    "name": "hikari"
  });

WriteResult({ "nInserted" : 1 })
```

findでドキュメントを参照します。


```shell
> db.users.find();
{ "_id" : ObjectId("603c992e64427af6a90762d1"), "id" : 1, "name" : "kento" }
{ "_id" : ObjectId("603c99f264427af6a90762d2"), "id" : 2, "name" : "hikari" }
```

## MongoDBからデータを取得する

いよいよMOngoDBに接続します。

MOngoDBはスキーマレスですが、mongooseで接続する時にはスキーマを定義する必要があります。

まず、schameフォルダを作成し、その中に`userSchame.js`を作成します（この辺はGraphQLではなくMongoDBとmongooseの話ですがお付き合いください。）。




# 参考

[Playing with GraphQL yoga and mongoose - DEV Community](https://dev.to/aurelkurtula/playing-with-graphql-yoga-and-mongoose-f4f)

[Get a GraphQL server up and running in 5 minutes using graphql-yoga and mongoose | Hacker Noon](https://hackernoon.com/get-a-graphql-server-up-and-running-in-5-minutes-using-graphql-yoga-and-mongoose-2740e36e961e)