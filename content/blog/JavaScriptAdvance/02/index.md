---
title: "#2 JavaScriptの歴史"
postdate: "2021-04-12"
updatedate: "2020-05-12"
categoryName: "JavaScript中級者を目指す"
categorySlug: "JavaScriptAdvance"
description: 
tags: ["JavaScript", "ECMAScript"]
---

# JavaScriptの歴史

## JavaScriptの誕生

JavaScriptは1995年、Netscape Communications社のプログラマーであった**ブレンダン・アイク**さんによって生み出されました。

JavaScriptはよく「Webサイトに動きを付ける言語」とも呼ばれますが、JavaScriptが生み出された当時はHTML＋CSSで構成されたWebサイトがほとんどだったようです。そんな中、「Webサイトに動きがつけられる！」という触れ込みで、ブレンダンさんが開発したJavaScriptの前身となるLiveScriptが、当時のナウいブラウザであったNetscape Navigatorに実装されました。

その後、LiveScriptは改名され、無事JavaScriptとなります。

JavaScriptに改名された背景として、当時Netscape Communications社はSun Microsystems社と業務提携しており、また、Sun社が開発し**イケイケドンドン**だったJavaの名前を拝借してあやかろう、というマーケティング的な一面があったようです。ただ、あくまでも名前（加えて、一部の構文）をもじっただけであり、JavaScriptとJavaの間に技術的な関係はありません。

Netscape Navigatorの活躍から少し遅れ、Microsoft社が現在でもおなじみのinternet Explorer(以下、IE)を開発、リリースします。

IEにJavaScriptを乗せられればよかったのですが、Netscape社はそれを許さなかったようです。そしてMicrosoftはMicrosoftで、JavaScriptの代替として独自に**JScript**という言語を開発します。

※以前までは「JScriptってなに？変な略し方するなよ」とか思ってましたが、似てはいるものの、別物のれっきとしたプログラミング言語なんですね。勉強になりました。

※Windows10になった現在でもJScriptはWSH（Windows Script Host）上で動作します。古めかしい言語のように思えますが、まだ現役です。

しかし、JavaScriptとJScriptは似てはいるものの互換性がありませんでした。さらに、両社は対抗しそれぞれに独自の機能を追加していき、「JavaScriptはIEでは動かない」、反対に「JScriptはNetscapeでは動かない」、と言った状況に陥りました（この辺りは想像に難しくないですよね）。

## ECMASciptの誕生

「こりゃいかん！何とか標準的な規格をつくれないのか！」となり、Netscape社はECMA International（エクマインターナショナル）に**JavaScriptの標準化**を依頼します。そして誕生したのが**ECMAScript**(ECMA-262)です。

ECMAScriptとはいったい何でしょうか。ECMAScariptは「JavaScriptのコアとなる**仕様**」であると私は考えています。

ECMAScriptという仕様を元に、各社がブラウザにJavaScriptを実装しています。ECMAScriptは**仕様**を定めているのみで、実装方法を定めるものではありません。ですので、ほとんどの機能は同じだけど、細かいところでブラウザによって挙動に違いがあることがあります。

※この「ブラウザ間の挙動の違い」を吸収するのがJQueryだったりします。
※標準化の流れのもと、2021年ともなれば、ブラウザ間でのJavaScriptの挙動の違いはほどんとないように思えます。

逆に、「JavaScriptって何？」と問われれば、「ECMAScriptを実装したもの」と答えることができます。

## ECMAScriptは新しいエディションがリリースされる

ECMAScriptはたびたび改定されます。恐らく**ES5**だったり**ES2015**という言葉を聞いたことがあると思いますが、あれはECMAScriptのエディションを指しています。

以前は不定期に新しいエディションが登場していましたが、2015年にリリースされたECMAScript 2015以降は毎年新しいエディションがリリースされています。2021年5月現在、ES2020までがリリースされています。

|エディション名|リリース日|備考|
|---------|--------|-----|
|1|1997年6月|記念すべき初版|
|2|1998年6月||
|3|1999年12月|正規表現、try/catch構文が追加|
|5|2009年12月|strictモードが追加|
|5.1|2011年6月||
|2015|2015年6月|class、let、const、Symbol、Promise 、、、など多数の機能/構文の追加|

[参考 | ECMAScript - Wikipedia](https://ja.wikipedia.org/wiki/ECMAScript#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3)



## 参考



https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction




https://www.jetbrains.com/ja-jp/lp/javascript-25/

http://www.kogures.com/hitoshi/history/javascript/index.html

(https://www.springboard.com/blog/history-of-javascript/)

https://www.markupdancing.net/archive/20081111-083300.html

(https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17)

https://noveltyinc.jp/2020/02/14/javascript-history/