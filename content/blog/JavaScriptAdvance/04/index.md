---
title: "#4 JavaScriptの基本的な書き方"
postdate: "2021-04-26"
updatedate: "2021-04-26"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: "JavaScriptの持つデータ型について解説します。長くなってしまうので前後2つの記事に分けて解説します。"
tags: ["JavaScript"]
---

# JavaScriptの書き方

まずは簡単にJavaScriptの書き方や基本的なルールを説明します。入門JavaScriptで解説した部分も多いので、さらっと行きましょう。

## 式や文の後ろにはセミコロンをつける

変数宣言したり関数を呼び出した時など、**式や文を記述したら**その後ろにはセミコロン`;`をつけましょう。`;`が文と文の区切りを表します。

```javascript
const myId = 1;

const getId = function (id) {
  return id;
};

getId(myId);
```

実は`;`をつけなくても、JavaScriptはコンパイル時に自動で`;`をつけてくれますが、これは時に意図しない不具合を招くことがあります。

しかし、例えば`if文`や`while文`には`;`は不要なのです。「どういった時に`;`が不要なのか？」は後ほど説明します。

## コメントアウト

HTMLやCSSと同じように、JavaScriptでもコメントを残すことができます。

1行コメントは`//`を用います。先頭に書けばその行がコメントアウトされます。コメントアウトされた命令は実行されません。

また、`//`は行の途中にも書くことができ、書いたところから後ろがコメントアウトされます。

```javascript
//console.log('test'); 行全体がコメントアウト

console.log('test'); // ここからコメントアウト
```

複数行コメントは`/* */`を用います。

```javascript
/*
  全てコメントアウトされ実行されません。
  const int = 1;
  console.log(int);
*/
console.log('これは実行されます。');
```

## 大文字と小文字は区別される

JavaScriptでは大文字と小文字は個別されます。例えば`id`と`Id`、`ID`と変数を用意したなら、それぞれは別の変数として認識されます。

## 文の末尾にはセミコロンを


