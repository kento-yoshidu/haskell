---
title: "イテレーター"
postdate: "2021-01-01"
updatedate: "2021-01-01"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: ""
tags: ["JavaScript", "イテレーター"]
---

## イテレーターとは

以下の2つ。

- オブジェクトである
- next()メソッドを持ち、実行するとイテレーターリザルトを返す

```javascript
// 空のオブジェクトを作成
const iterator = {};

// nextメソッドを実装
iterator.next = () => {
	const iteratorResult = { value: 1, done: false};
	return iteratorResult;
}
```

イテレーターリザルトの内容は

- value : 値
- done: 値を全て取り終えたかの判定

である。

## イテラブル

イテレーターを持つオブジェクト。

`[Symbol.iterator]()`を実行するとイテレータを返すこと。



## 参考

[Objectオブジェクトについて[組み込みオブジェクト]](https://noumenon-th.net/programming/2017/02/02/object-built/)
