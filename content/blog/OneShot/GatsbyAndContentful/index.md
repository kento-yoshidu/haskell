---
title: "GatsbyとContetnfulでブログを作成する時の注意点"
postdate: "2021-05-21"
updatedate: "2021-05-21"
categoryName: "単発記事"
categorySlug: "OneShot"
description: ""
tags: ["Gatsby", "Contenful", "静的サイトジェンレータ", "Jamstack", "HeadlessCMS"]
---

# 事の発端

「Webサイト高速化のための　静的サイトジェネレーター活用入門」というJamstackなサイト作成の入門書があります。SSGであるGatsby、HeadlessCMSであるContentfulの組み合わせでJamstackなブログを作るという内容です。

確か2020年6月の発売当初に購入して一通りやりました。素晴らしいクオリティで2020年に購入して一番良かった本です。この本がSSGやJamstackについて勉強しだす出発点になりました。

2021年5月、Jamstackなサイトを量産しようと思い久しぶりにこの本を引っ張り出しましたが、上手く進まない、、、。具体的には、Contentfulからブログ記事の本文を取得するGraphQLクエリがエラーになるのです。このエラーを解消するのに数時間費やしてしまいました。

まだ日本語の情報も少なく、ガチ初心者の方がたどり着くのもちょっと難しいと思いますので、記事に残しておきたいと思います。あと、将来の自分のためにも。

## 前提条件

 - `gatsby-source-contentful`のv4.0.0以上を使用している
 - ContentfulでRichTextでコンテンツを管理している

 ※ 上記で紹介した本の内容に言及するものではありません。きっかけになったものとして紹介しただけです。
 ※ この構成のベストプラクティスを紹介する記事ではありません。「こうしたら動くようになった」を紹介する記事です。

## 結論

graphqlクエリを以下のように書き換えます。

```



```

## 何が起こったのか



## 何が原因なのか

2020年11月、Contentfulからブログデータを引っ張ってくるために必要なプラグインである`gatsby-content-source`のv4.0.0で破壊的変更が加えられたためです。Gatsby公式のリリースノートは[こちら](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-contentful/CHANGELOG.md#400-next0-2020-11-09)を参照してください。

これにより、RichTextを取得するGraphQLクエリのフィールドを変更する必要があります。

2020年11月以降に`Gatsby new`して環境構築した場合は更新後のプラグインがインストールされ、上手く動かない可能性が高いです。

## 感想

これからもブログ記事はマークダウンで書こうと思いました。以上。

# 参考

[gatsby-source-contentful | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/)

[gatsby/CHANGELOG.md at master · gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-contentful/CHANGELOG.md#400-next0-2020-11-09)

[Gatsby+contentfulでRichTextのjsonが見当たらない... - Qiita](https://qiita.com/hey1007/items/6261c374529c482863af)

[gatsby-source-contentful@4.0.0 Rich Text Changes/Migration · Discussion #28098 · gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby/discussions/28098)

[【Gatsby + Contentful】 僕のRich Textに救済を](https://zenn.dev/take77/articles/a266a75bf12c23)
