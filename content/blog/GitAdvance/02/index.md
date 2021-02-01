---
title: "#2 git logでコミット履歴を見る(後編)"
postdate: "2020-11-21"
updatedate: "2020-11-21"
categoryName: "Git中級者を目指す"
categorySlug: GitAdvance
description: 前回は基本的なgit logのオプションを紹介しましたが、今回はもっと掘り下げて
tags: ["git"]
---


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
