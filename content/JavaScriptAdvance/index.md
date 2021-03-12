---
title: "#1 JavaScriptのデータ型"
postdate: "2021-01-28"
updatedate: "2020-02-26"
categoryName: "応用JavaScript"
categorySlug: JavaScriptAdvance
description: 
tags: ["JavaScript"]
---

# JavaScript応用編

# JavaScriptのデータ型

# プリミティブとオブジェクト

# 変数の宣言

# オブジェクトが持つメソッド

---

# JavaScript応用編

恐らく`Promise`そして`async/await`が最初の山場だと思います。
後はNode.js、

# JavaScriptのデータ型

JavaScriptに限らない話ですが、ほとんどのプログラミング言語で**データ型**という概念が存在します。

データ型は、ある変数やある値が**整数なのか、少数なのか、文字なのか、複数のデータをひとまとめにしたものなのか**、データの**種類**を表すものです。言語や文脈によって、**タイプ**や**型**などとも呼ばれたりします。

データ型の必要性を考える例として、`1 + 1`という式をプログラミング言語に計算させた時の答えを考えてみます。

私たち人間からしてみれば、「数字の1と数字の1を足すんだから、答えは2である」と自然と考えてしまいそうなところです。

ただ、多くのプログラミング言語には**数値型**、そして**文字列型**というデータ型が存在します。数字の1だけではなく、文字列の1が存在するということです。そして、プログラミング言語が`1 + 1`という計算式を実行する時には、それぞれの数値のデータ型が明確になっていなければなりません。

また、計算結果を考えたとき、`数字の1 + 数字の1`の答えは`数字の2`であると想像できますが、`文字列の1 + 数値の1`の場合はどうなるでしょうか？また、`文字列の1 + 文字列の1`の場合は？

これらの計算結果、そして、そもそも計算が行えるかどうかは、言語によって異なります。

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

数値と文字列が混在している場合には、数値が文字列に変換され、2つの文字をくっつけたような文字列の`11`という結果が得られるようです。

実際にどのようなデータ型が存在しているかは言語によって異なります。

これから、JavaScriptが持つデータ型を解説します。

## リテラル

ここで**リテラル**という用語の解説をはさみます。リテラルとは、数値や文字を直接記述した定数のことです。

難しく考える必要はないんですが、下のコードで

```javascript
const name = "kento";
const age = 18;
```

変数に`kento`や`18`を代入していますが、この`kento`や`18`がリテラルです。また、更に分類して**文字列リテラル**や**数値リテラル**などと呼ぶこともあります。

ソースコードにべた書きした**数値や文字列そのもの**のことを言ってるんだなーくらいに考えてもらえれば大丈夫です。

リテラルという単語はこれから何度も使用しますので憶えておいてください。

## JavaScriptは動的型付け言語

**「JavaScriptにはデータ型がない」**

このような文言をもしかしたらネット上で見かけたことがあるかも知れません。もうお分かりだと思いますが、これは間違いです。

JavaScriptでは変数宣言時、データ型を指定する必要がありません（というより指定できない）。

これが上記のような誤解を引き起こしたのかもしれませんが、変数に値を代入した時、JavaScriptが自動的に型を判定し、変数に割り当てています。

```javascript
// iは数値型
let i = 1;
```

MDNでも

>JavaScript では、変数が直接的に特定のデータ型に関連付けられているわけではなく、どの変数にもあらゆる型の値を代入(および再代入)できます。

と述べられています。

また、後から違うデータ型の値を再代入することが可能です。

```javascript
// 数値型の変数i
let i = 1;

// 文字列を代入することができる
i = "hello";
```

このように、自動的に型を付与してくれたり後から型を変更できる型システムを持った言語は、**動的型付け言語**と呼ばれ分類されます。

JavaScriptは動的型付けです。

逆に、後からデータ型を変更できない言語を**静的型付け言語**と言います。JavaScriptの親戚である**TypeScript**はまさに静的型付け言語です。

TypeScriptでは、変数宣言時、`変数名 :データ型`という風に変数の型を明示的に宣言することができます。例えば数値型の変数に文字列型の値を入れようとするとコンパイル時にエラーが発生します。

```typescript
// iは数値型であると宣言
let i :number = 1

// 数値型であると宣言しているのに、文字列を代入しようとしているのでエラー
let j :number = "hello"
// error TS2322: Type 'string' is not assignable to type 'number'.
```

また、違うデータ型の値を後から代入することも不可能です。

```typescript
// 数値型で宣言
let i :number = 1

// 文字列型を代入しようとしているのでエラー
i = "string"
// error TS2322: Type 'string' is not assignable to type 'number'.
```

話がそれてしまうのでTypeScriptは別で勉強したいと思います。

まずは以下の点だけ押さえておけばOKです。

- JavaScriptは**動的型付け言語**である
- 変数に型が自動で付与され、途中で型が変わる可能性もある

次からは、実際にどのようなデータ型が存在しているのかを確認していきます。

[javascriptの変数のメモリへの割当について｜teratail](https://teratail.com/questions/72635)

## 数値型

数値型は文字通り、数を指します。10進数、2進数、8進数、16進数、浮動小数点などが表現できます。

JavaScriptにおいて数のデータ型は、数値型と、のちに紹介するBigInt型の2種類です。

言語によっては整数と浮動小数点でデータ型が分かれていたり、桁数によって分かれていたりしますが、JavaScriptにおいてはこのような分け方はされていません。

### 10進数

10進数を表現するのは簡単です。私たちが普段使っている通り数を記述すれば、それがそのまま10進数リテラルになります。

`.`を付ければ小数点を表現できますし、`-`を付ければ負の数を表現できます。

```javascript
console.log(1) 
//=> 1

console.log(-10.5)
//=> -10.5
```

※正確にはJavaScriptの数値型は、全て64bitの浮動小数点数です。整数は存在していません。内部的に浮動小数点数だが、画面に表示する時に整数っぽく見せてくれているということです。これはまた別にページを設けたいと思います。

---

ここで**typeof演算子**を紹介します。これは`typeof 変数や値`の形で記述すれば、その変数や値の**データ型**を返してくれる演算子です。

```javascript
console.log(typeof 1)
//=> number

console.log(typeof 1.1)
//=> number

console.log(typeof -1)
//=> number
```

この通り、整数も小数点も負の数も全てnumber（数値）型で一括りにされていることがわかります。

これは他のデータ型の紹介部分でも使用しますので、憶えておいてください。

続けて、いくつかの演算子を使って計算もしてみましょう。

```javascript
console.log(1 + 2)
//=> 3

console.log(1.1 + 3.8)
//=> 4.9

console.log(1 - 3)
//=> -2
```

計算演算子については、演算子のページで詳しく触れます。

---

※小数点数が混じった式の計算をすると、意図しない結果が出力される可能性があります。

```javascript
console.log(0.1 + 0.2);
//=> 0.30000000000000004

console.log(0.3 === (0.1 + 0.2))
//=> false

console.log(1.3 + 1.1);
//=> 2.4000000000000004
```

前述しましたが、JavaScriptの数値型は64bitの浮動小数点数で値を持っているためです。これはJavaScriptに限った話ではありませんが、64bitという限られた値の中で循環小数を扱うことが出来ないために発生する結果です。

こちらも別でページを用意したいと思います。今は「こんなこともあるんだなー」くらいで考えてもらえばOKです。

### 2進数[ES2015]

2進数リテラルは`0b`もしくは`0B`を付与することで表現します。この2進数リテラル表現はES2015から導入されました。

`0`と`1`以外の数値を使用した時はシンタックスエラーになります。また、`typeof`で`number`が出力されることも確認しておきます。

```javascript
console.log(0b11)
//=> 3

console.log(0b12)
//=> SyntaxError: Invalid or unexpected token

console.log(typeof 0b11)
//=> number
```

### 8進数

8進数リテラルは`0o`もしくは`0O`を付与することで表現します(OctocalのO)。この8進数リテラルの導入もES2015からです。

```javascript
console.log(0o11)
//=> 9

console.log(typeof 0o11)
//=> number

console.log(0o9)
//=> SyntaxError: Invalid or unexpected token
```

ちなみに、ES5までは先頭に`0`を付与して8進数リテラルを表現していたようですが、非常に分かりにくいですね。

```javascript
// 一応これでも8進数
console.log(011)
//=> 9
```

### 16進数

16進数リテラルは`0x`もしくは`0X`を付与することで表現します。

```javascript
console.log(0xff);
//=> 255

console.log(typeof 0xff);
//=> 255

console.log(0xgg)
//=> SyntaxError: Invalid or unexpected token
```

### 浮動小数点数

浮動小数点リテラルは`.`か`e`もしくは`E`を用いて表現します。

```javascript
console.log(1.1)
//=> 1.1

console.log(314e-2)
//=> 3.14
```

浮動小数点数に関しては別サイトですが、こちらが分かりやすいいです。

[ビットで表す数字の世界～浮動小数点編～ - 半導体事業 - マクニカ](https://www.macnica.co.jp/business/semiconductor/articles/intel/133327/)

### NaN

次は、ちょっと分かりにくいですが、**数字ではない**ことを表すNaNリテラルです。計算できないものを計算しようとしたときなどに現れます。

例を示した方がわかりやすいですね。数値と文字列の割り算を考えます。

例えば数値型の2を文字列型の2で割った時には1が返ってきます（JavaScriptが気を効かせて文字列を数値に変換した上で計算してくれています。）。ですが、`test`など数値に変換しようのない文字列で割ると`NaN`が返ってきます。

```javascript
console.log(2 / "2");
//=> 1

console.log(2 / "test");
//=> NaN
```



### Infinity

```javascript
const i = 10 ** 1000;

console.log(i)
```





### NanとInfinity

[データ型とリテラル · JavaScript Primer #jsprimer](https://jsprimer.net/basic/data-type/)

[IEEE 754 - Wikipedia](https://ja.wikipedia.org/wiki/IEEE_754)

[The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html)

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

## constによる変数の宣言

constキーワードを用いて変数を定義することができます。constは**constant**の略であり、「定数、不変」といった意味を持ちます。constによって宣言された変数は、**値の再代入**ができません。

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

ただ、`const`と`let`は**ブロックスコープ**を持ちます。よって、`{}`で囲まれている部分の外と中であれば、同じ名前で変数を宣言できます。`{}`が境界線になっているのです。詳しくはブロックスコープの章で解説します。

```javascript
const i = 10;

{
  // {}の中なので、外と同じ名前を利用できる
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

### 値は書き換えが可能

constant=定数、という言葉から、その値は変わらないイミュータブルなものであると思われるかもしれませんが、必ずしもそうではありません。定数がイミュータブルであるかどうかは、何を代入するかによって変わります。

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

MDNでは**定数**という言葉を用いていますが、私としては**再代入できない変数**であると捉えた方が分かりやすいんじゃないかと思っています。

---

[メモリ管理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Memory_Management)

---

## letによる変数宣言

`let`キーワードを用いることでも変数を宣言できます。constによる変数は再代入が不可でしたが、letによる変数は後から値の再代入が可能です。

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
//=> I'm kento, 33 years.
```

## オブジェクトのプロパティは変更できる

現在の状態を整理しておくと、nameプロパティには**kento**、ageプロパティには**33**が格納されています。
代入演算子`=`を使用して、この値を上書きすることができます。

```javascript
obj.name = 'hikari';
obj.age = 20;

console.log(obj.greeting());
//=> I'm hikari, 20 years.
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