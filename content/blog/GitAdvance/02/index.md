---
title: "#2 git logでコミット履歴を見る(後編)"
postdate: "2020-11-21"
updatedate: "2021-02-04"
categoryName: "Git中級者を目指す"
categorySlug: GitAdvance
description: 前回は基本的な`git log`のオプションを紹介しましたが、今回はもっと掘り下げてより高度なオプションを紹介したいと思います。
tags: ["git"]
---

# より詳しいオプションを

前回は`git log`の基本的なオプションを紹介しましたが、今回はもっと掘り下げてより高度なオプションを紹介したいと思います。

<!--特に複数のブランチを考慮したlog出力を重点的に確認したいと思います。-->

前回までは、いわば、ある一つのブランチの中で完結するようなオプションを紹介しました。
複数のブランチが切られている時（というかそれが当たり前ですが）、`git log`と打ってどの範囲のログが出力されるか、正確にわかっていますか？
「あのブランチだけのログが見たいのに、何故か違うブランチのログもしゅつりょくされる。。。」といったことはありませんか？
たまーに出てくるチルダ(~)やキャレット(^)ですが、どのような意味を持っているかわかっていますか？

~~私もわかっていなかったので~~改めて確認したいと思います。

## その前に参考記事

「ブランチって何？」「HEADって何？」を確認しておきたい方は以下の良記事を読むことをお勧めします。

[GitのHEADとは何者なのか](https://qiita.com/ymzk-jp/items/00ff664da60c37458aaa)

## 複数ブランチを対象としたgit logコマンド

リポジトリは以下の状態であるとします。

<!--![](./image/01.jpg)-->

![](./image/image01.png)

main、develop、fixという3つのブランチがあります。

青い丸の中の数字はコミットのハッシュIDです。

コミット8はdevelopにfixをマージしたマージコミットです。現在HEADはdevelopを差しています。

まずは`git log ブランチ名`と入力したときの出力を確認しておきます。

### git log main

mainブランチである`3`から矢印で辿れる、`3,2,1`が対象です。

![](./image/image02.png)

### git log develop (git log HEAD)

developブランチである`8`から辿れる、`8,7,6,5,4,1`が対象です。

![](./image/image03.png)

### git log fix

fixブランチである`7`から辿れる、`7,6,1`が対象です。

![](./image/image04.png)

## `..`と`...`の動作

### git log develop..main

言語化するとしたら「developになくて、mainにあるもの」
でしょうか  。

`3,2`が出力されます。

mainから`3,2,1`が辿れますが、`1`はdevelopからも辿れるので対象外です。

![](./image/image05.png)

### git log main..develop

上記の逆です。読み方は「mainになくて、developにあるもの」。

developから`8,7,6,5,4,1`が辿れますが、`1`はmainからも辿れるので対象外です。

![](./image/image06.png)

### git log main..fix

読み方は「mainになくて、fixにあるもの」。

fixから`7,6,1`が辿れますが、`1`はmainからも辿れるので対象外です。

![](./image/image07.png)

### git log fix..develop

読み方は「fixになくて、developにあるもの」。

developから`8,7,6,5,4,1`が辿れますが、`7,6,1`はfixからも辿れるので対象外です。

![](./image/image08.png)

### git log develop..fix

読み方は「developになくて、fixにあるもの」。

fixから`7,6,1`が辿れますが、これらは全てdevelopからも辿れるのでコミットは出力されません。

![](./image/image09.png)

### git log main...develop (git log develop...main)

読み方「mainかdevelopのどちらか一方にあるもの」。

`1`はmainからもdevelopからも辿れるので対象外です。

![](./image/image010.png)

なお、`...`を指定する場合、ブランチの

### git log develop...fix (git log fix...develop)

読み方「developとfixのどちらか一方にあるもの」。

`7,6,1`はdevelopからもfixからも辿れるので対象外です。

![](./image/image11.png)

## チルダとキャレット

### git log develop~

チルダを付与することで**親のコミット**を取得できます。

この場合、`git log develop~`は`git log 5`と同義と言えます。

![](./image/image12.png)

### git log develop~~ (git log develop~2) 

チルダを複数つけることで、更に親を辿っていくことができます。また、`~~`は`~2`に置き換えることができます。

![](./image/image13.png)

### git log develop^

![](./image/image14.png)


# `git log`ではないけれど

以上、`git log`に関係するオプションを紹介しましたが、`git log`ではないもののコミットログに関係するコマンドをいくつか紹介したいと思います。


## `git shortlog`でユーザごとのコミット履歴を取得する

`git shortlog`で各コミットをコミットを行ったユーザごとに分類して表示します。
以下の例だと、alien:alien:さんが1コミット、potsunenさんが5コミット行ったことが分かります。コミット数でマウントをとりたいときに便利です。

```shell:title=console
$ git shortlog

alien (1):
      edit style.scss

potsunen (5):
      initial commit
      first commit
      second commit
      third commit
      create style.scss
```

| オプション | 意味 |
| --------- | :----- |
|-n|コミット数が多いユーザから表示する|
|-s|コミット数だけを表示する|


```shell:title=console
$ git shortlog -ns
     5  potsunen
     1  alien
```

## `git blame`で変更を行ったユーザを特定する

`sayHello`という関数名を`screamHello`という名前に変更した人がいるとします。「誰や勝手に関数名変えたの...」

```shell:title=console
$ git log -p

bcb5843 (HEAD -> master) Edit script
diff --git a/script.ts b/script.ts
index 4018eac..37504b5 100644
--- a/script.ts
+++ b/script.ts
@@ -1,4 +1,4 @@

-function sayHello(name: string): void {
+function screamHello(name: string): void {
   console.log('hello ' + name)
 }
```

`git blame`コマンドは、*行ごとに*コミットがあった日時、コミッターを表示します。引数にはファイル名を渡してあげてください。

```shell:title=console
$ git blame script.ts

^0f1e08c (potsunen 2020-06-05 11:45:45 +0900 1)
bcb58434 (alien    2020-06-05 11:51:00 +0900 2) function screamHello(name: string): void {
^0f1e08c (potsunen 2020-06-05 11:45:45 +0900 3)   console.log('hello ' + name)
^0f1e08c (potsunen 2020-06-05 11:45:45 +0900 4) }
```

この例で言うと2行目、alienさんが`bcb58434`コミットの時に変更したことが分かります。

なお、blameは「責める、糾弾」などと言った意味です。自分が犯人だった時にはrebase等でもみ消しましょう。

https://maku77.github.io/git/log/diff-between-branches.html

https://maku77.github.io/git/log/diff-between-branches.html

[GitのHEADとは何者なのか](https://qiita.com/ymzk-jp/items/00ff664da60c37458aaa)