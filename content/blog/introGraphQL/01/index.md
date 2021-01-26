---
title: "#1 GraphQLサーバを立てる"
postdate: "2021-01-20"
updatedate: "2021-01-26"
categoryName: "入門GraphQL"
categorySlug: introGraphQL
tags: ["GraphQL", "GraphQL-Yoga", "入門"]
---

<section class="section">

# 環境構築する

まずは`yarn init -y`して・・・

```shell

$ yarn init -y
  yarn init v1.22.5
  question name (graphql):
  question version (1.0.0):
  question description:
  question entry point (index.js):
  question repository url:
  question author:
  question license (MIT):
  question private:
  success Saved package.json
  Done in 18.61s.
```

サーバライブラリの`graphql-yoga`をインストールします。

```shell
$ yarn add graphql-yoga

$ cat package.json

{
  "name": "graphql",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "graphql-yoga": "^1.18.3"
  },
}
```

index.jsを作成、以下の通り記述します。
最小構成という事で、"Hello World"と返すだけのhelloクエリを定義しています。

```javascript
const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => `Hello World`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers});

server.start(() => {
  console.log('Server is running on localhost:4000');
})
```

`typeDefs`にスキーマを定義します。必須の引数です。
`hello: String!`はhelloクエリが必ずString型の値を返すことを意味しています。(!はnullにならないという意味)

resolversはどんなクエリにどんな値を返すかを定義します。

```shell
$ node index.js

Server is running on localhost:4000
```

`http://localhost:4000`にアクセスします。

![](./images/image01.jpg)


左上のペインに以下のクエリを入力、ボタンをクリックします。

```graphql
  {
    hello
  }
```

以下のような形で**Hello World**が返されたら成功です。

![](./images/image02.jpg)


## 引数付きのクエリを作成する

さすがにもう少し凝ったことをしたいので、先ほどのhelloクエリを編集し、
「自分の名前を渡し、`Hello 名前`と返ってくる」ようにしたいと思います。
引数はnameとし、String型を指定、末尾に`!`をつけて必須にします。

```javascript{3,5}
const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
  type Query {
    hello(name: String!): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${ name }`
  }
}

const server = new GraphQLServer({ typeDefs, resolvers});

server.start(() => {
  console.log('Server is running on localhost:4000');
})

```

```graphql
  {
    hello(name: "kento")
  }

  # Hello kento
```


## 引数を増やす

年齢を格納するageフィールドを追加します。

```javascript
(略)

const typeDefs = `
  type Query {
    // ageを追加
    hello(name: String!, age: Int!): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, {name, age}) => `I\'m ${name}. ${age} years old.`
  }
}

(略)

// "hello": "I'm kento. 12 years old."
```

渡した値は第二引数におbジェクト形式で入るみたいです。

```javascript
(略)

const typeDefs = `
  type Query {
    hello(name: String!, age: Int!): [String]
  }
`

// プロパティを取得
const resolvers = {
  Query: {
    hello: (_, args) => {

      let result = [];

      Object.keys(args).forEach(arg => {
        result.push(arg)
      })

      return result
    }
  }
}

(略)

//"hello": ["name", "age"]
```

```javascript
hello: (_, args) => typeof args
// "hello": "object"

hello: (_, {name}) => `Hello ${ name }`)

// もしくは、
hello: (_, args) => `Hello ${ args.name }`)
```


https://www.apollographql.com/docs/apollo-server/data/resolvers/

https://apollographql-jp.com/tutorial/resolvers/


https://medium.com/@gbolahanolawuyi/setting-up-a-graphql-server-with-node-graphql-yoga-prisma-a3f59d33dac0
