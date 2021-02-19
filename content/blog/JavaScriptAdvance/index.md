---
title: "プリミティブとオブジェクト"
postdate: "2021-01-28"
updatedate: "2020-01-28"
categoryName: "応用JavaScript"
categorySlug: JavaScriptAdvance
description: 
tags: ["JavaScript"]
---

# JavaScriptのデータ型

## プリミティブ値

JavaScriptにおいて、文字列、数値、真偽値、null、undefined、symbolの6つは、**プリミティブ値**であるとされています。

プリミティブは「原始的」などと訳されますが、**これ以上細分化されない**、データそのものと捉えることができます。

これに対してオブジェクトはプロパティやメソッドを持っていることから、プリミティブ値とオブジェクトは対照的な存在であると言えそうです。

```javascript
// プリミティブ値の宣言
const str = "string";
const num = 1;
const bool = true;
const nul = null;
const unde = undefined;
const sym = Symbol();

// オブジェクトの宣言
// idプロパティ、funcメソッドを持っている
const obj = {
  id: 1,

  func() {
    return this.id
  }
}
```

[Primitive (プリミティブ) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDN](https://developer.mozilla.org/ja/docs/Glossary/Primitive)

# letとconstによる変数の宣言

## constによる定数の宣言

constキーワードで宣言された値を、**定数**と呼びます。constは**constant**の略であり、「定数、不変」といった意味を持ちます。定数は、**値の再代入**ができません。

```javascript:title="script.js
const i = 1;

i = 2;
// => TypeError: Assignment to constant variable.

i++;
// => TypeError: Assignment to constant variable.

const myObj = {};

myObj = {id: 1};
// => TypeError: Assignment to constant variable.
```

### 定数は必ずしもイミュータブルとは限らない

定数、という言葉から、その値は変わらないイミュータブルなものであると思われるかもしれませんが、必ずしもそうではありません。定数がイミュータブルであるかどうかは、何を代入するかによって変わります。

つまり、イミュータブルであるプリミティブ型のデータを代入すればイミュータブルになるし、ミュータブルであるオブジェジェクト型のデータを代入すればミュータブルになります。

JavaScriptにおけるプリミティブ型は、`string`、`number`、`boolean`、`symbol`、`null`、`undefined`でした。これらは、値を後から変更しようとしてもできません。よってイミュータブルな定数であると言えます。

```javascript
const i = 1;

i = 2;
// => TypeError: Assignment to constant variable.
```

しかし、ミュータブルであるオブジェクト型データならどうでしょう。前述の通り、再代入はできませんが、値の変更は可能です。

```javascript
const myObj = {};

myObj.id = 1;
console.log(myObj.id)
//=> 1

myObj.id = 2;
console.log(myObj.id)
// => 2

myObj = {id: 3};
// => TypeError: Assignment to constant variable.
// **再代入**は不可
```

```javascript
const myObj = {};

myObj.id = 1;

console.log(myObj.id)
//=> 1

myObj.id = 2;

console.log(myObj.id)
//=> 2
```

MDNでも以下のように述べられています。

>const 宣言は、値への読み取り専用の参照を作ります。これは、定数に保持されている値は不変ではなく、その変数の識別子が再代入できないということです。たとえば、定数の中身がオブジェクトの場合、オブジェクトの内容（プロパティなど）は変更可能です。

[const - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const)


---

[メモリ管理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Memory_Management)



## 同じプロパティを持つオブジェクトの比較

https://qiita.com/makotoo2/items/fc3a617882916f9775f5
https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures
https://qiita.com/hcr1s/items/172ba167ba44a35c2a45
https://qiita.com/makotoo2/items/9566cebf205ef8b42505
https://qiita.com/sho_U/items/38460b6e9bcd1dae1387


## モジュールの歴史

- JavaScriptにはモジュールがなかった。
- `CommonJS`、`AMD`、`ESModules`は仕様の名前

# CommonJsによるexport

```javascript

// module.jsから関数をエクスポート
module.exports.test = () => {
  consoel.log('testモジュール');
}

// script.js
const test = require('./module.js');

test.test();
// => testモジュール

/*****************************************/

// module.jsから関数をエクスポート
module.exports.test = "testモジュール";

// script.js
const { test } = require('./script')

console.log(test)
// => testモジュール

/*****************************************/

// mojule.jsからオブジェクトをエクスポート
module.exports.test = {
  name: "kento",
  age: 42,
}

// script.js
const { test } = require('./module')

console.log(test)
```

[Node.jsでimportでES moduleのコードが動作しないときの対処法](https://iwb.jp/nodejs-esmodule-code-import-error/)j:w


[Node.js における ES Modules を理解する](https://numb86-tech.hatenablog.com/entry/2020/08/07/091142)

[JavaScript のモジュールを理解する](https://blog.ikeryo1182.com/javascript-modules/)

[JavaScriptのモジュールの歴史](https://uuuundefined.tokyo/blog/javascript-modules)

[CommonJS のモジュールシステムをおさらい](https://hysryt.com/archives/1542)

[Node.jsとECMAScript Modules](https://blog.hiroppy.me/entry/nodejs-esm)