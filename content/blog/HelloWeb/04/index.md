---
title: "#4 HTMLの基本①（DOCTYPE宣言とhtml要素、head要素）"
postdate: "2021-06-04"
updatedate: "2021-06-04"
categoryName: "初めてのHTML & CSS"
categorySlug: "HelloWeb"
description: 
tags: ["HTML"]
---

# DOCTYPE宣言とhead要素

[前回]()までで、HTMLとCSSについて基本中の基本を学習しました。

早速目標成果物を目指しコーディングをしていきたい所ですが、、、まだもうしばらくはHTMLをメインに学習を進めていきます。

今回はhtmlファイルの大枠であるhtml要素、head要素、body要素について学習します。

前提として、`index.html`は以下のようになっているはずです。この内容をもとに、それぞれの要素を解説していきます。もし違っていれば以下のように書き換えることをお勧めします。また、今回は`style.css`は登場しません。

```html:title=index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./style.css" rel="stylesheet">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>こんにちは、いい天気ですね。</p>
  <p>今日はご飯でもおごりますよ。</p>
</body>
</html>
```

## DOCTYPE宣言

では、`index.html`を上から順番にみていきます。

ファイルの先頭行には`<!DOCTYPE html>`という記述があります。これは**DOCTYPE（ドキュメントタイプ）宣言**と呼ばれるもので、その文書が**最新のhtmlで記述された文書である**ということがブラウザに伝える役割をもっています。

DOCTYPE宣言文はHTMLにおけるタグや要素ではありませんが、現代のHTMLマークアップでは必須の定型文のようなものです。忘れずに記述するようにします。

```html:title=index.html
<!DOCTYPE html>
...略
```

<aside>
先ほど、

> ～ その文書が**最新のhtmlで記述された文書である**ということがブラウザに伝わります。

という記述をしました。

恐らくインターネット上を見ると「`<!DOCTYPE html>`とすることで、そのファイルが**HTML5**であることをブラウザに伝える」という説明が多いと思います。しかし、2021年1月29日に、[W3Cによる「HTML5」が廃止されました](https://html.spec.whatwg.org/review-drafts/2020-01/)。それにより、WHATWGの[HTML Living standard](https://html.spec.whatwg.org/)がHTMLの唯一の仕様となりました。

つまり、**HTML5**という仕様がなくなったわけです。この辺りを鑑み、**最新のHTML**という表現にしています（WHATWGによるHTMLは`5`→`6`→`7`みたいに数字によるバージョニングはされない）。また、当ブログでもHTML5という単語は使用せず、**HTML**に統一したいと思います。
</aside>

## html要素

続けて`<html>`と`</html>`でhtml要素を構成します。こうすることで、「htmlに関することが書かれています」ということがブラウザに伝わります。

```html:title=index.html
<!DOCTYPE html>
<html lang="ja">

...略

</html>
```

どころで、html開始タグを見て見ると`lang="ja"`と書かれてありますが、これは一旦何でしょうか？

### 属性

新しい言葉が出てきます。開始タグの中には**属性**を付与し、その要素に**情報を付加**することができます。属性の書き方は以下の通りです。

```html
<要素(タグ)名 属性="属性値">
```

html要素には**lang属性**を付与し、html要素内の**文章の言語**を指定するのが一般的です。

lang属性（languageのlangですね）は文字通り、記述されている文章の言語を情報として付与するものです。属性値として`ja`を指定していますが、これは`日本語`という意味の属性値です。つまり、「html要素内（≒このWebページ）は、日本語の文章で構成されています」と宣言していることになります。

属性は`lang属性`以外にも無数にあり、様々な情報を要素に付加することができます。属性に関しても、地道に少しづつ憶えていきましょう。

## head要素とbody要素

`html要素`の中には`head要素`と`body要素`を格納します。

\#2の記事でも説明しましたが、head要素はWebページの情報、body要素はブラウザに表示させる文章を記述します。

![](./images/image14.jpg)

html要素には`head要素`と`body要素`が必須です。順番もhead要素→body要素の順で記述します。

また、html要素に入れられるのはこの2つの要素だけです。他の要素を入れることはできないことを憶えておいてください。

```html:title=index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  ...略
</head>
<body>
  ...略
</body>
</html>
```

## head要素にはWebページの情報を記述する

続けて、html要素の子要素としてhead要素を記述します。

```html:title=index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./style.css" rel="stylesheet">
  <title>Document</title>
</head>
...略
</html>
```

head要素には**Webページの情報**（画面には表示されない情報）を記述します。これらの情報は主にブラウザや検索エンジンが利用します。

cssファイルの取り込みも`head属性`の中で`link属性`を使用して行っていますね。これは「スタイルシートを取り込んでcssを適用させて」とブラウザに指示する役割を持っていると言えます。

head要素には以下のような情報を記述できます（一例です）。

- 🖊️️️ 文字コード
- 🖊️ ページのタイトル
- 🖊️️️ CSSやJavaScriptファイルの読み込み
- 🖊️️ ページの説明文
- 🖊️️ ページの著者

どれもブラウザや検索エンジンが利用する情報で、ユーザの目には直接触れない情報です（ページのタイトルだけは例外ですが）。

head要素に記述できる情報はとても多くこの講座では扱いきれませんので、以下、meta要素とtitle要素のみに絞って説明します。

## meta要素

それでは、head要素の中身を上から順番に見ていきたいと思います。最初は`<meta>`が2つ並んでいるのがわかります。

```html:title=index.html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

meta要素とは、文字通り**ページのメタ情報**を記述するためのものです。「メタ情報」と言っていますが、要するにWebページに関する何らかの情報です。

meta要素は様々な属性を付与することによって初めて意味を持ちます。例によって属性にも沢山の種類がありますが、ここでは記述が必須である**charset属性**のみを紹介します。

### charset属性

charset属性はそのページで使用されている**文字コード**を指定します。htmlファイルはUTF-8で作成しましたね。ですのでmeta属性には`charset="UTF-8"`と記述します。これでブラウザに「このファイルはUTF-8で書かれている」と伝えることができます。

```html:title=index.html
<head>
  <meta charset="UTF-8">
  ...略
</head>
```

もう一つ、
```html:title=index.html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

というのもありますね。これは**ビューポート**と呼ばれる、ブラウザの表示領域の大きさを設定する属性です。この記述はレスポンシブデザイン（）

### 空要素


## title要素

**title要素**は、その名の通りページのタイトルを表します。`index.html`のtitle属性を以下のように書き換えてみます。

```html:title=index.html
<title>head属性について</title>
```

上書き保存したらブラウザをリロードしてください。ブラウザのタブのサイト名の部分が更新されているはずです。

![](./images/image02.jpg)

このように、ブラウザ上で使用されるほか、Googleなど検索エンジンの検索結果上でもtitle属性の内容が使用されます。

また、SNSでリンクを共有した時にもtitleタグの内容が表示されます。以下、Microsoft Teamsでこのページのリンクを張った時の様子です。

title属性はhead属性内に**必ず一つだけ入れる必要があります**。

ページタイトルは、ページ本文以外ではもっともユーザの目に触れるものだと言えます。そのページの内容を正確に、でシンプルに簡潔に設定することが必要です。

[](https://developer.mozilla.org/ja/docs/Web/HTML/Element/meta)

[HTML Standard](https://html.spec.whatwg.org/)

[13 The HTML syntax | HTML Standard](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)

[head には何が入る? HTML のメタデータ | MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

[lang - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/lang)

[lang 属性にGoogle「言語指定にlangは使うな」／公式発言](https://seopack.jp/seoblog/20161111-use-hreflang/)

[title - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/title)

[HTML Standard Review Draft January 2020](https://html.spec.whatwg.org/review-drafts/2020-01/)

[HTMLの言語指定  は必要？不要？　lang属性をGoogleは無視](https://schole-otium.com/blog/programming/html/lang-attribute-necessary/)