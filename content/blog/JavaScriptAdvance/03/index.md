---
title: "#3 Node.jsのインストール"
postdate: "2021-04-13"
updatedate: "2020-04-16"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: 
tags: ["JavaScript", "Node.js"]
---

# Node.jsのインストール

Node.jsについて公式Webサイトを見てみると

> Node.js® は、Chrome の V8 JavaScript エンジン で動作する JavaScript 環境です。

とされています。要するに**JavaScriptの実行環境**であると言えます。

これまではHTMLファイルを作成し、JavaScriptファイルを読み込んでブラウザ上でJavaScriptを実行していました。この時はブラウザがJavaScriptの実行環境であった、と言えます。

Node.jsもブラウザと同じくJavaScriptの実行環境です。Google Chromeの中のJavaScriptの解析と実行をしている**V8**と呼ばれるプログラムを抜き出し、PCやサーバ上で利用できるようにしたイメージです。

Node.jsを利用すれば、コンソールから`node`コマンドでのJavaScriptの実行が可能です。また、**REPL**という対話形式でJavaScriptを実行できるプログラムも利用できます。

また、**npm**というパッケージ管理システムを利用できるようになり、JavaScriptの開発を補助してくれるライブラリやフレームワークをダウンロード、実行できます。

このように、Node.jsには現代のJavaScriptプログラミングに必要なものが揃っていますので、ぜひNode.jsをインストールして使用しましょう。

## バージョン

本講座では以下のバージョンのソフトウェアを使用します。

- Node.js 14.16.1
- npm 6.14.12

## Node.jsをインストールする

ではさっそくインストーラをダウンロードします。

[Node.jsのWebサイト](https://nodejs.org/ja/)にアクセスし、**推奨版**と書かれている部分をクリックします。そうするとダウンロードが始まります。

![](./images/image01.jpg)

ダウンロードしたmsiファイルをダブルクリックで実行します。

![](./images/image02.jpg)

基本的にオプション等を選択しませんので、
Nextを推して進んでいきましょう。

![](./images/image03.jpg)

![](./images/image04.jpg)

![](./images/image05.jpg)

![](./images/image06.jpg)

下記の画面では、オプションでネイティブ開発に必要なツール群をインストールするかを選択できます。今回は必要ありませんので、**チェックマークを入れずに**Nextを選択しましょう。

![](./images/image07.jpg)

後はinstallをクリックしてしばし待ちましょう。

![](./images/image08.jpg)

完了です。

![](./images/image09.jpg)

コマンドプロンプトなどを立ち上げ、`node -v`と入力し実行します。`-v`オプションを渡すことでNode.jsのバージョンを確認することができます。

```
$ node -v
v14.16.1
```

このようにバージョンは表示されればNode.jsが上手くインストール出来ています。



## JavaScriptを実行する

これまではブラウザ上でJavaScriptを実行していましたが、これからはコンソール上で実行できます。

まずは任意のフォルダに`script.js`ファイルを作成し、以下のように記述します。

```script.js
console.log('Hello World');
```

