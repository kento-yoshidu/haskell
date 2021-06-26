---
title: "#2 AWS SAAメモ ネットワーク"
postdate: "2021-06-26"
updatedate: "2021-06-26"
seriesName: "AWS SAA勉強メモ"
seriesSlug: "AWS"
description: ""
tags: ["AWS", "AWS SAA", "VPC"]
---

## リージョン

AWSサービスを提供している拠点のこと。世界中の国もしくは地域を指す。世界中に25のリージョンが存在しており、また、日本なら通称東京リージョン、大阪ローカルリージョンがある（共に2021年6月現在）。

ユーザーはリージョンを自由に選んでサービスを利用することができる。日本にいるからアメリカのリージョンは使えない、とかはない。でも地理的に近いところを選んどけばOK。ただ、リージョンによって利用できるサービスやその料金に違いがある。

リージョン間は**分離**されており、基本的にリージョン間での通信はできない。これは障害に強いと言えるが、リージョン間で通信したりするには何かしらの工夫が必要だとも言える。


## AZ

アベイラビリティ（availability）ゾーン。リージョンより小さい単位。

通常、リージョンは複数のAZを含む。AZは地理的に分散しており、これにより災害などに強い。

AZ同士は接続されており**通信が可能**な点が先に挙げたリージョンとは違う。AZ同士は数十km離れていると言われているが、高速なネットワークで接続されておりAZ間での通信を高速で行うことができる。

AZの数は81もある（2021年6月現在）。

そしてAZは複数のデータセンターで構成されている。つまり下図のような状態。

![](images/image01.png)

### マルチAZ

AZは論理的にまたがって利用できる。これをマルチAZ構成という。

以下、AWS入門書などで**クッソ見る**構成。1つのリージョンの中にAZが2つある。それぞれのAZにWebサーバーとDBサーバーを用意する。2つのAZの真ん中にあるのが**ロードバランサー（LB）**。AZを2つ利用することで負荷分散と障害耐性強化が実現している。

![](images/image02.png)


## VPC

Amazon Virtual Private Cloudの略。利用者ごとの仮想的なプライベートのネットワーク。VPN内にサブネットを切って論理的に分離する。また、VPCはAZをまたぐことができる。

![](images/image03.png)

VPCがVPC外のリソースと通信するにはVPCエンドポイントを経由する。Internet GatewayやVPN Gateway、AWS Endpointsなど。




https://aws.amazon.com/jp/about-aws/global-infrastructure/

https://business.ntt-east.co.jp/content/cloudsolution/column-54.html

https://dev.classmethod.jp/articles/vpc-endpoint-gateway-type/