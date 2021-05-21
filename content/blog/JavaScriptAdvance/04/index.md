---
title: "#4 JavaScriptの基本的な書き方"
postdate: "2021-04-26"
updatedate: "2021-05-21"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: "JavaScriptの持つデータ型について解説します。長くなってしまうので前後2つの記事に分けて解説します。"
tags: ["JavaScript"]
---

# JavaScriptの書き方

まずは簡単にJavaScriptの書き方や基本的なルールを説明します。入門JavaScriptで解説した部分も多いので、さらっと行きましょう。

## 大文字と小文字は区別される

JavaScriptでは大文字と小文字は個別されます。例えば`myObj`というオブジェクトを用意したなら、きちんと`myObj`と呼び出さなければなりません。`myobj`（全部小文字）ではだめです。

```javascript
const myObj = {};

console.log(myObj);
//=> {}

// 小文字になっている
console.log(myobj);
//=> ReferenceError: myobj is not defined
```

## コメントアウト

HTMLやCSSと同じように、JavaScriptでもコメントを残すことができます。

1行コメントは`//`を用います。先頭に書けばその行がコメントアウトされます。コメントアウトされた命令は実行されません。また、`//`は行の途中にも書くことができ、書いたところから後ろがコメントアウトされます。

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

## 文の末尾にはセミコロンをつける

変数宣言したり関数を呼び出した時など、**文を記述したら**その後ろにはセミコロン`;`をつけましょう。`;`が文と文の区切りを表します。

```javascript
const myId = 1;

const getId = function (id) {
  return id;
};

getId(myId);
```

実は`;`をつけなくても、JavaScriptはコンパイル時に自動で`;`をつけてくれますが、これは時に意図しない不具合を招くことがあります。

`;`を付けるつけないで**宗教戦争**もあったりしますが、少なくともこのサイトで学習するうえでは`;`は付けるようにしましょう。
