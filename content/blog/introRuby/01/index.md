---
title: 今更Rubyに入門してみた
postdate: 2021-02-03
updatedate: 2021-02-03
categoryName: "今更Rubyに入門してみた"
categorySlug: introRuby
tags: ["Ruby"]
---


## Rubyの特徴

- スクリプト言語である
- 処理系は主にインタプリタとして実装されている
- オブジェクト志向言語である
- 動的型付け言語である

## Rubyでは全てがオブジェクトである

Rubyではありとあらゆる全てのものがオブジェクトです。

数値、文字列、配列、さらにはtrue、false、nilも全てがオブジェクトです。例えばJavaScriptでしたらオブジェクト型、プリミティブ型と分かれています。この、全てがオブジェクトであるという点は、Rubyの大きな特徴であると言えます。

## Rubyにおけるミュータブルとイミュータブル

ミュータブルオブジェクトは文字列、配列、連想配列など
イミュータブルオブジェクトは整数、浮動小数点、true、false、nil、シンボルなど

## `object_id`を使用してIDを取得する

Rubyではオブジェクトごとに重複しない一意の整数(**object_id**)が割り当てられます。object_idはオブジェクトの生成と共に振られ、GCが行われるか、プログラムが終了するまで変化しません。

`object_id`メソッドを使用してその値を出力することができます。全てがオブジェクトであるため、`object_id`を使用すれば、どんなものでも必ず何かしらの値が返ってくるはずです。検証してみたいと思います。

### ミュータブルなオブジェクトは違うidが振られる

ミュータブルなオブジェクトとして、文字列、つまりStringクラスを取り上げます。以下の例を見てもらえれば、同じtestという文字列に、違うオブジェクトIDが割り当てられていることがわかります。

また、変数を2つ用意して同じ文字列を格納しても、違うIDが振られることがわかります。

```ruby
puts "test".object_id
#=> 36

puts "test".object_id
#> 48

var = "test"
puts var.object_id
#=> 60

var2 = "test"
puts var2.object_id
#=> 72
```

そしてこれは当然、**それぞれ違うオブジェクトが生成されている**ということになります。

https://note.com/taka027/n/nf250327637ff

https://docs.ruby-lang.org/ja/latest/method/Object/i/object_id.html

https://note.com/milneon/n/n305f2f7ceaff


## データ型

### 文字列

シングルクオートかダブルクオートを使用します。ダブルクオートなら特殊文字が使用できたり、変数展開が行われます。

```ruby:title=ruby.rb
puts "日本の首都は\n奈良県ではない"
=>日本の首都は
  奈良県ではない

name = "kento"

puts "My name is #{name}"
=> My name is kento
```

### 数値

整数同士の割り算は整数の結果が得られる。小数点以下が**切り捨て**。
オペランドのどちらかを少数にすれば、結果も少数で得られます。

```ruby

puts 2 / 1
=> 2

puts 3 / 2
=> 1

puts 3.0 / 2
=> 1.5
```

### 真偽値

Rubyにおいては、nilとfalseが*偽*であり、それ以外が全て"真"です。nilはnilではなく偽になるところが特徴です。

```ruby:title="ruby.rb
def trueOrFalse(arg)
  if arg
    puts "#{arg} is true"
  else
    puts "#{arg} is false"
  end
end

trueOrFalse(nil)
trueOrFalse(false)
trueOrFalse(0)
trueOrFalse(" ")
```
