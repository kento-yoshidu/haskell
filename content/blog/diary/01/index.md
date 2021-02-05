---
title: "Gatsbyでブログを始めました"
postdate: "2021-02-05"
updatedate: "2021-02-05"
categoryName: "日記"
categorySlug: diary
description: " "
tags: ["日記", "Gatsby"]
---

# Gaysbyでブログを始めました

情報をアウトプットできる場所が欲しいなと前から思っており、Qiitaやはてぶの利用も考えていましたが、「もっと気楽にやりたい」「自分メモ的なものも置きたい」「スタイルは自分で自由に変えたい」などと言い訳ばかりして全然進んでいませんでした。

しかし情報を仕入れているうちに、Gatsbyという静的サイトジェネレータを知り、「これは面白そうだ（楽できそうだ（面倒くさくなさそうだ））」と思い一念発起、重い腰をあげることにしました。

作りたいのはブログ≒単純な静的ページを集めたサイトだったので、バックエンドは不要。よってWordPress等のCMSは最初の内に選択肢から消えました。

興味のあったNginxでサーバを立てて動かしてみようとも思ったのですが、「静的サイトジェネレータを使ってみたい」「せっかくならJavaScriptでかけるものがいい」「新しい技術の習得も兼ねたい」ということで、いくつか選択肢はあったのですが、結局Gatsbyを採用しました。
(他の静的サイトの構築でNext.jsかNuxt.jsを利用したいと考えています。)

このページでは、当ブログの機能やこだわりポイントを書きなぐっています。素人仕事で恐縮ですが、Gatsbyでのブログ作成を考えている方の参考になれば幸いです。

くそ雑魚エンジニアの僕でもこれくらいはできたので、敷居は高くないと思っています。

## Point1 マークダウンでの記事作成

記事は全てマークダウンで記載しています。

当初はヘッドレスCMSであるContentfulの導入を考えていましたが、高機能で便利な代わりに自由度はマークダウンの方が高そうだったのでこちらに変更しました。

何より、ローカルで好きな時にさくっと作業できるというのがいいですね。

## Point2 コンテンツの取得はGraphQLで

こだわりポイントというかGatsbyがそういう作りになっているのですが、Gatsbyでは**GraphQL**というクエリ言語を使用してコンテンツを取得、サイトを構築（ビルド）します。

例えばこのページのヘッダに、当サイトのサイト名である「鳥に生まれることができなかった人へ」という文字を表示させていますが、これはmarkdownに「鳥に生まれる～」とべた書きしているのではなく、`gatsby-config.js`というファイルに以下のような形でサイト名を記述、ビルド時にGraphQLがこれを取得、表示させてくれています。

```javascript{4}:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `鳥に生まれることができなかった人へ`,
    siteUrl: `https://potsunen-blog.netlify.app/`,
    author: {
      name: `Kento Yoshizu`,
      summary: `Front-end engineer in Shiga, Japan`,
    },
    description: `IT技術ブログとその他趣味`,

    (略)
```

以下が`gatsby-config.js`で定義したサイト名を取得するgraphqlクエリです。

```graphql
query {
  site {
    siteMetadata {
      title
    }
  }
(略)
```

これをおおむね以下のような感じでheaderコンポーネントに渡しています。

```javascript:title=header.js

```

Gatsbyを選んだそもそもの理由が、「クエリ言語にGraphQLを採用しているから」というのもありましたし、結果的にいい勉強になったと思っています。

## Point3 カテゴリ機能とタグ機能

たとえば、[こちら](https://potsunen-blog.netlify.app/categories/)にアクセスすると、当ブログの記事カテゴリ一覧と、各カテゴリの記事件数が表示されます。

これももちろん、僕が一つ一つ手で書いてるのではなく、GraphQLを使用しコンテンツを取得、Gatsbyが自動でページを生成してます。

markdownファイルの先頭に以下のようにyaml風味な形式で、記事が属するカテゴリを記述します(frontmatterと呼ばれています)。

```markdown:title=例：このページのfrontmatter
---
title: "Gatsbyでブログを始めました"
postdate: "2021-02-05"
updatedate: "2021-02-05"
categoryName: "日記"
categorySlug: diary
description: " "
tags: ["日記", "Gatsby"]
---
```

`gatsby-node.js`を使用し、ビルド時に「GraphQLでマークダウンファイルの情報（frontmatterという）を取得、それらを同じカテゴリの記事を集約、それらをリスト化したページを作成」、というようなことをやってくれています。

## Point4 「前後の記事へ」機能

## Point5 ページネーション機能

##


