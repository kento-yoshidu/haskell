---
title: "オウジェクト"
postdate: "2021-01-01"
updatedate: "2020-01-01"
seriesName: "JavaScript中級者を目指す"
seriesSlug: "JavaScriptAdvance"
description: 
tags: ["JavaScript", "this"]
---

# JavaScriptのオブジェクト

```javascript
const obj = new Object();

console.log(obj);
// => {}
```

これは**Objectオブジェクト**とも呼ばれる。

`Object()`がコンストラクタ関数。

## コンストラクタ関数

コンストラクタ関数は共通部分を持ったオブジェクト（インストランス）を複数生成できるクッキーの抜き型のようなもの。

`new コンストラクタ関数`だと、新たに生成されるオブジェクトがコンストラクタ関数の`this`の値になる。

[JavaScriptのnewって要るの要らないの、どっち？（シリーズその４） - Qiita](https://qiita.com/yoshiwatanabe/items/5fa47f1e031861c6b610)

https://golang.hateblo.jp/entry/javascript-anonymous-immediate-class

## コンストラクタ関数とリテラル表現

オブジェクトを作成する時には、オブジェクトリテラル（`{}`）を使用するのが一般的です。

```javascript
const obj = {};

console.log(typeof obj);
//=> object
```

そして、オブジェクト型には`Object()`コンストラクタ関数が用意されています。

```javascript
const obj2 = new Object();

console.log(typeof obj2)
//=> object
```

リテラルとコンストラクタ関数に違いは、、、ありません。リテラルはコンストラクタ関数のショートカットです。わざわざコンストラクタ関数を呼び出さなくてもいいように、短く記述できるようにしてくれているのです。

`constructor`プロパティにアクセスすれば、インスタンスオブジェクトを生成したコンストラクタ関数が分かります(参照が返ってきます)。リテラルを使用した時、コンストラクタ関数を使用した時、両方ともObject()コンストラクタ関数が返ってくることが分かります。

```javascript
const obj = {};

console.log(obj.constructor);
//=> [Function: Object]

const obj2 = new Object();

console.log(obj2.constructor)
//=> [Function: Object]
```

```javascript
const myNull = new Null();
//=> ReferenceError: Null is not defined
```
<aside>
数値型、文字列型、真偽値型にもリテラルとコンストラクタ関数が用意されていますが、これらはショートカットではありません。次の章で解説します。
</aside>

## 例外

いくつかのプリミティブ値の生成の場合はちょっと違います。JavaScriptにおいて、数値、文字列、真偽値はプリミティブ値であり、オブジェクトではありません。しかし、**状況に応じてオブジェクトのように振る舞います**。

文字列をもつ変数を生成するのに、String()コンストラクタ関数を使用できます。また、`str`オブジェクトがどのコンストラクタから生成されたかを確認するために、`str`の`constructor`プロパティを確認します。

```javascript
const str = new String('SampleString');

console.log(str.constructor);
// [Function: String]
```

では、文字列リテラルを使用して`str`変数に文字列を代入します。そして`constructor`プロパティを確認すると、、、

```javascript
const str = 'SampleString';

console.log(str.constructor);
// [Function: String]
```

String()コンストラクタ関数を使用した時と同じように、String()コンストラクタ関数で生成されていることがわかります。

[](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

https://pisuke-code.com/javascript-get-exact-data-type/