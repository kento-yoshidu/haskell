---
title: "memo"
postdate: "2021-03-05"
updatedate: "2021-03-16"
categoryName: "Git中級者を目指す"
categorySlug: "GitAdvance"
description: "git log のオプションは多岐にわたります。入門書に載っている基本的で有名なものからちょっとマニアックなものまで、できるだけ例を踏まえて紹介しますので良ければ実際にコマンドを打ち込みながら読んでみてください。"
tags: ["git"]
---

```javascript
console.log("10" - "3");
//=> 7

console.log("10" * "3");
//=> 30

console.log("10" / "3");
//=> 3.3333333333333335

console.log(0 === -0)
//=> true
```

# 演算子

`+`演算子は片方のオペランドが文字列であれば、もう片方の文字列も文字列に変換します。

```javascript
console.log("true" + true)
//=> 2
```


## Sysbol

```javascript
let a = Symbol('a');
let b = Symbol('b');

console.log(a === b);
//=> false
```

```javascript
console.log(typeof a);
//=> symbol
```

`toString()`メソッドを持つ。

```javascript
console.log(a.toString());
//=> Symbol(a)
```


```javascript
const a = ['apple', "banana", "lemon"];

let b = Array.from(a)

console.log(b)
//=> [ 'apple', 'banana', 'lemon' ]

console.log(a === b)
//=> false

// "lemon"を削除
b.shift(2)

console.log(b)
//=> [ 'banana', 'lemon' ]

// コピー元の配列aには影響ない
console.log(a)
//=> [ 'apple', 'banana', 'lemon' ]
```
