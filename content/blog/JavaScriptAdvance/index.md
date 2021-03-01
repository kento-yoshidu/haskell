---
title: "#1 JavaScriptのデータ型"
postdate: "2021-01-28"
updatedate: "2020-02-26"
categoryName: "応用JavaScript"
categorySlug: JavaScriptAdvance
description: 
tags: ["JavaScript"]
---

# JavaScriptのデータ型

JavaScriptに限らず、ほとんどのプログラミング言語で**データ型**という概念が存在します。

データ型は、ある値が**整数なのか、少数なのか、文字なのか、複数のデータをひとまとめにしたものなのか**という風に、データの種類を表すためのものです。言語や文脈によって、**タイプ**や**型**などとも呼ばれたりします。

データ型の必要性を考える例として、`1 + 1`という式をプログラミング言語に計算させた時の答えを考えてみます。

私たち人間からしてみれば、「数字の1と数字の1を足すんだから、答えは2である」と自然と考えてしまいそうなところです。

ただ、多くのプログラミング言語には**数値型**、そして**文字列型**というデータ型が存在します。数字の1だけではなく、文字列の1が存在するということです。そして、プログラミング言語がこの式を実行する時には、「それぞれの数値のデータ型」が明確になっていなければなりません。さもないと、「この式はどうやって計算すればいいの？」という状態になってします。

そして、それぞれのデータ型によって計算結果が変わってくることになります。`数字の1 + 数字の1`は`2`ですが、`文字列の1 + 数値の1`は？もしくは`文字列の1 + 文字列の1`はどうなるでしょうか？これらの計算結果、そして、そもそも計算が行えるかどうかは、それぞれの言語によって変わります。

JavaScriptにおいては、**暗黙的な型変換**が行われ`文字列 + 数値`という式はエラーにならず計算が行われます。計算結果は以下の通りです。

```javascript
// 数値 + 数値
console.log(1 + 1);
//=> 2

// 数値 + 文字列
console.log(1 + "1");
//=> 11

// 文字列 + 数値
console.log("1" + 1);
//=> 11

// 文字列 + 文字列
console.log("1" + "1");
//=> 11
```

数値と文字列が混在している場合には、数値が文字列に変換され、2つの文字をくっつけたような`11`という結果が得られるようです。

どのようなデータ型が存在しているかは言語によって異なります。本ページではJavaScriptが持つデータ型の説明を行います。

## JavaScriptにはデータ型がない？

もうお分かりだと思いますが、JavaScriptにはデータ型があります。しかし、見出しの様な文言をたまにネット上で見かけます。



JavaScriptは**動的型付言語**であるため、後から変数のデータ型を変更することが可能です。

```javascript
// 数値型の変数i
let i = 1;

// 文字列を代入することができる
i = "string";
```

逆に、後からデータ型を変更できない言語を**静的型付言語**などと言います。JavaScriptの親戚である**TypeScript**はまさに静的型付言語です。

TypeScriptでは、コンパイル時に数値型に文字列型を代入できないことを教えてくれ、エラーが発生します。

```typescript
// TypeScriptによる例

let i = 1

i = "string"
//=> error TS2322: Type 'string' is not assignable to type 'number'.
```


https://teratail.com/questions/72635

## 数値型

JavaScriptでは数値型として、10進数、16進数、浮動小数点などが表現できます。`typeof`演算子を使用すればそのデータがどんな型なのかを返してくれます。ここからは`typeof`演算子を使用しながら数値型に関して説明します。

```javascript
console.log(typeof 1)
//=> number

console.log(typeof 1.1)
//=> number

console.log(typeof 1e4)
//=> number

console.log(typeof "1")
//=> string
```

---

# プリミティブとオブジェクト

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

そして、同じ定数を複数回宣言することはできません。シンタックスエラーになります。

```javascript
const i = 1;

// 再度宣言
const i = 10;
//=> SyntaxError: Identifier 'i' has already been declared
```

### constはブロックスコープを持つ

ただ、`const`と`let`は**ブロックスコープ**を持ちます。よって、`{}`で囲まれている部分の外と中であれば、同じ名前で定数を宣言できます。詳しくはブロックスコープの章で解説します。

```javascript
const i = 10;

{
  // {}の中なら、外と同じ名前を利用できる
  const i = 100;

  // {}の中のiの値を出力
  console.log(i);
  //=> 100
}

// {}の外のiの値を出力
console.log(i);
//=> 10
```

### 宣言と同時に初期化も行う

`const`を使用する場合、「とりあえず変数を宣言だけして、値は後から代入する」といったことはできません。シンタックスエラーになります。宣言と同時に値を代入して初期化する必要があります。

```javascript
const i;
// => SyntaxError: Missing initializer in const declaration

// 初期化も同時に
const i = 10;
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

---

## letによる変数宣言

`let`キーワードを用いることで、変数を宣言できます。constによる定数は再代入が不可でしたが、letによる変数は、後から値の再代入が可能です。

また、`let`では変数宣言のみを行うことが可能です。後から必要になったタイミングで値を代入することができます。

```javascript
let i = 1;

// 再代入
i = 10;

console.log(i)
//=> 10

// 宣言のみも可。後から代入できる。
let j;

j = 10;

console.log(j);
//=> 10
```


---

[メモリ管理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Memory_Management)

---

```javascript
const obj = new Object();

// nameというプロパティを作成、kentoというデータを格納(ドット記法)
obj.name = "kento"
console.log(obj.name);
//=> kento

// ageというプロパティを作成、33というデータを格納(角括弧記法)
obj["age"] = 33;
console.log(obj["age"]);
//=> 33
```

主流は、ドット記法を使用する方法です。ただ、プロパティ名に数値を使用したいときには角括弧記法を使用しなければいけません。

```javascript
obj.1 = "one";
//=> SyntaxError: Unexpected number

obj[1] = "one";
//=> OK!

obj["item price"] = 30;
//=> OK!
```

本書では、プロパティの追加も呼び出しも基本的にドット記法を使用します。

---

続けて、関数であるメソッドも追加してみます。メソッドも代入演算子を使用して追加できます。

```javascript
(略)

obj.greeting = function() {
  return `I\'m ${this.name}, ${this.age} years.`
}

console.log(obj.greeting())
//=> I'm kento, 33 years.。
```

ここで、オブジェクトの持つ、プロパティやメソッドを取得する方法を考えます。いくつか方法がありますが、ここでは`for...in`構文を試したいと思います。

`key`にはキー（つまり、name、age、greeting）が入ります。そして`obj[key]`とすることで、キーの値を取得することができます。

```javascript
(略)

for(const key in obj) {
  console.log(`${key}: ${obj.key}`)
}
/*
  name: kento
  age: 33
  greeting: function() {
    return `I\'m ${this.name}, ${this.age} years.`
  }
*/
```

## オブジェクトリテラルを使用する

ブラケットを用いてオブジェクトを作成します。これはObjectコンストラクタ関数を使用するのと全く同じことです。

このブラケット`{}`は、**オブジェクトリテラル**と呼ばれています。

```javascript
const obj = {
  name: "kento",
  age: 33,

  greeting: function() {
    return `I\'m ${this.name}, ${this.age} years.`
  }
}

console.log(obj.greeting());
//=>I'm kento, 33 years.
```

## オブジェクトのプロパティは変更できる

現在の状態を整理しておくと、nameプロパティには**kento**、ageプロパティには**33**が格納されています。
代入演算子`=`を使用して、この値を上書きすることができます。

```javascript
obj.name = 'hikari';
obj.age = 20;

console.log(obj.greeting());
//=>I'm hikari, 20 years.
```

そして、greetingメソッドを書き換えることもできます。それも、関数に限らず、例えば真偽値に置き換えることも可能です。

```javascript
// 真偽値を代入
obj.greeting = true;

// ↓ 関数ではなくなったら()はなくす
console.log(obj.greeting);
//=> true
```



## 同じプロパティを持つオブジェクトの比較

https://qiita.com/makotoo2/items/fc3a617882916f9775f5
https://developer.mozilla.org/ja/docs/Web/JavaScript/Data_structures
https://qiita.com/hcr1s/items/172ba167ba44a35c2a45
https://qiita.com/makotoo2/items/9566cebf205ef8b42505
https://qiita.com/sho_U/items/38460b6e9bcd1dae1387
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new


# オブジェクトの操作

## Object.entriesでオブジェクトから配列を取得する

https://jsprimer.net/basic/object/

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