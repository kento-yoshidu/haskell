---
title: "#1 JavaScript中級者を目指そう"
postdate: "2021-04-09"
updatedate: "2020-04-16"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: 
tags: ["JavaScript"]
---

# JavaScript中級者を目指そう

入門JavaScriptでは「WebページでJavaScriptを動作させる」「JavaScriptで簡単なアプリを作る」ことを目標としていました。

とりあえずJavaScriptを書いて動かすことを最優先にしていたので、**JavaScriptの言語仕様**についてはほとんど触れていませんでしたが、今回はその言語仕様を理解することが目標です。

具体的にこんなアプリを作る、といった目標はありません。人によっては退屈な内容に思えるかもしれません。

学習することはJavaScriptについてのほぼ全てで（そうしたいという願望）、目次は以下の通りです（随時更新します。）。

- \#1 JavaScript中級者を目指そう（本ページ）
- [#2 JavaScriptの歴史](http://blog.toriwatari.work/JavaScriptAdvance/02/)
- [#3 Node.jsのインストール]
- [#4 JavaScriptのデータ型(1)]
- [#5 JavaScriptのデータ型(2)]
- [#6 プリミティブ値とオブジェクト]
- [#7 変数]
- [#8 オブジェクトが持つメソッド]
- [#9 if/else文]
- [#10 for文とwhile文]
- [#11 関数]
- [#12 Numberオブジェクト]
- [#13 Stringオブジェクト
- [#x 非同期処理（コールバック関数）]
- [#x 非同期処理（Promise）]
- [#x 非同期処理（async/await）]

---

- [#コラム オブジェクト処理大全]

まずは**Node.js**をインストールするところから始めます。これまではブラウザ上でJavaScriptを実行していましたが、これからは基本的にNode.jsでscriptを実行し動作を検証します。

非同期処理を行う`Promise`、そして`async/await`が最初の山場だと思います。

JavaScriptを学習することで、様々なフレームワークやランタイムに発展することができます。

- フロントエンドフレームワークであるAngular、React、Vue.js、Svelte
- サーバサイドランタイムであればNode.jsやDeno
- 静的型付け言語のTypeScript
- モバイルアプリを作るならreact Native
- デスクトップアプリならelectron

・・・などなど、夢が広がりますね。

私もまだまだ未熟者ですが、中級者になれるよう、そしてゆくゆくは上級者と呼ばれるよう、一緒に勉強していきましょう。

## 参考にした書籍、サイト

### JavaScript: The Definitive Guide, 7th Edition(書籍)

|Amazonリンク|:--|
|---|---|
|[Amazonリンク]|(https://www.amazon.co.jp/Javascript-Definitive-Most-used-Programming-Language/dp/1491952024/ref=pd_lpo_14_t_0/356-6084002-4274440?_encoding=UTF8&pd_rd_i=1491952024&pd_rd_r=4c12a428-25c6-4422-8ba4-1c7b4bf8c7a7&pd_rd_w=oYNI9&pd_rd_wg=d464b&pf_rd_p=43793539-bb55-42ca-a906-e224e71aa7fd&pf_rd_r=0A4E885RX080FC2565YP&psc=1&refRID=0A4E885RX080FC2565YP
)|

出版：2020年6月

いわゆるサイ本の7版(英語)です。英語は苦手ですが、文章は平易なのでそんなに苦労せず読めました。

内容は言わずもがな、細かいところまで踏み込んでいます。ES2019までカバーしています。早く日本語版が出てほしいですね。


### 現代の JavaScript チュートリアル(サイト)

### https://jsprimer.net/

### https://www.amazon.co.jp/dp/B01LYO6C1N/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1

内容は充実しており、私は何週も読み直した本です。ただ、いかんせん古いですね。ES2015には対応していますが、「まずはES5で解説、その後ES2015にあてはめて解説」という形になっています。

今はもっと新しく充実した本がたくさんあるので、選択肢にはあがりにくいと思います。

早く改訂版が出てほしいですね。


# 参考

[JavaScript ベスト・オブ・ザ・イヤー 2020](https://risingstars.js.org/2020/ja)
