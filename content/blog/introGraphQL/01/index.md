---
title: "#1 GraphQLサーバを立てる"
postdate: "2021-01-20"
updatedate: "2021-01-20"
categoryName: "入門GraphQL"
categorySlug: introGraphQL
tags: ["GraphQL", "TypeScript", "入門"]
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

              question entry point (index.js): app.ts # TypeScriptで書くので、app.tsにする

              question repository url:

              question author:

              question license (MIT):

              question private:

              success Saved package.json

              Done in 18.61s.

```

 

 

```shell

 

$ tsc --init

message TS6071: Successfully created a tsconfig.json file.

```

 

サーバライブラリの`graphql-yoga`をインストールします。後はTypeScriptも。

 

```shell

$ yarn add graphql-yoga

 

( 略 )

 

$ yarn add --dev ts-node typescript

 

( 略 )

 

$ cat package.json

 

{

  "name": "graphql",

  "version": "1.0.0",

  "main": "app.ts",

  "license": "MIT",

  "dependencies": {

    "graphql-yoga": "^1.18.3"

  },

  "devDependencies": {

    "ts-node": "^9.1.1",

    "typescript": "^4.1.3"

  }

}
```