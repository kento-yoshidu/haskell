---
title: "JamstackなWebサイトを構築してみた①"
postdate: "2021-05-14"
updatedate: "2021-05-21"
categoryName: "JamstackなWebサイトを構築してみた"
categorySlug: "Jamstack"
description: "いわゆるJamstackなサイトを作成してみて、何となく分かってきたので知見を記載します。"
tags: ["Jamstack", "Gatsby", "Nuxt.js", "HeadlessCMS", "静的サイトジェネレータ", "JavaScript"]
---

# JamstackなWebサイトを沢山作ってみる

2021年の目標を「SSGやHeadlessCMSを使ってWebサイトを10個作成する」という風に**5月に入ってから**決めました。

5月末時点でまだ10個は作れてないですが、何となく感覚が分かってきたので、自分なりに「Jamstackとは何か？」というテーマで記事にしたいと思います。

## どんなJamstackサイトを作ってる？

「Jamstackって何？」というは後回しにして、私が作成したJamstackなサイトについて列挙します。

作成したサイトは以下の通りです。基本的にメインとなるページ＋ブログ記事ページという構成になっています。

ブログ記事をマークダウンやファイルvueファイルで管理しているものもありますので、厳密にはJamstackではないものも含まれていますが大目に見てください。

※ 上から3番目以降はサンプル（お試し）で作成しており、ブログを更新とかしているわけではありません。
※ どんなサイトを作るか10個考える方が辛い。

|サイト名|SSG|HeadlessCMS|デプロイ先|
|-------|---|-----------|-------|
|鳥に生まれることができなかった人へ|Gatsby|-(マークダウン)|AWS Amplify|
|CSS Animation & Tips|Nuxt.js|-(vueファイル)|AWS Amplify|
|NuxtDentalClinic|Nuxt.js|microCMS|Netlify|
|GatsbyCafe|Gatsby|Contentfull|Netlify|
|-----------------|Gridsome|graphCMS|AWS Amplify|

### SSGには何がある？

今のところ、SSGとして**Gatsby**、**Nuxt.js**、**Gridsome**を使用しています。後はVue.jsベースの**VuePress**、Reactベースの**Next.js**が残っているのでぜひ作成したいですね。

一番のお気に入りはGatsbyです。このブログはGatsby製です。次点でGridsomeです。両者ともGraphQLでデータを取得できるのでいい感じです。

### 各種SSGの難易度は？

多分、一番難しいのがGatsbyです。Reactベースなのに加えクエリ言語にGraphQLを使用していますので、それらについて初見の方が一から憶えていくのはきついと思います。ただ、日本語の記事も多くありますし、実際私も「Reactほんの少しだけ＋GraphQL初見」という所から、ブログの基本機能の作成まで～2週間くらいで進めましたので（結構苦労はしましたが）、難しいと言ってもソコソコです。爆速＋高機能なフレームワークなので頑張って覚える価値は間違いなくあります。

逆に一番簡単なのはVuePressだと思います。


### HeadlessCMSには何がある？

microCMS、Contentful、graphCMSなどが挙げられます。

一番のお勧めはmicroCMです。日本の会社なのでドキュメントは全て日本語で読めますし、ブログにも力が入っていて**チュートリアルが充実**しています。このチュートリアルをこなすだけで1-2ヵ月くらいは暇をつぶせそうですね。

[microCMSブログ（チュートリアル）](https://blog.microcms.io/category/tutorial/page/1)



### デプロイ先には何がある？

https://monotein.com/blog/what-is-ssg



さて、次は「Jamstackとは何か」ということについて考えたいと思います。

### HeadlessCMSは難しい部分もある