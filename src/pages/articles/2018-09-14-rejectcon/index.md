---
title: Security Reject Con + ssmjp に参加してきた
date: "2018-09-19T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2018091900/"
category: "event"
tags:
  - "Security"
  - "ssmjp"
description: "Security Reject Con + ssmjp に blog 枠で参加してみました。"
---
[Security Reject Con + ssmjp](https://ssmjp.connpass.com/event/95820/) に blog 枠で参加してみました。
blog 枠で何かに参加するのは初めてですｗ

会場は大崎の [Future](https://www.future.co.jp) 様。[Vuls](https://github.com/future-architect/vuls) 関係などで何度か来ている、個人的にはおなじみの場所です。

# 前説

いつもの [@tigerszk](https://twitter.com/tigerszk) さんの [#ssmjp](https://ssm.pkan.org/) 説明。「なんでもしゃべりに来てね！」が基本スタンスです。

Security Reject con の説明。カンファレンスや学会で惜しくも不採用になったネタを発表して次の採用に活かすというイベント。

# Future 様の紹介

[@hogehuga](https://twitter.com/hogehuga) さん。

あんがい普通の会社紹介資料から、あまり普通ではない説明が続く。
羽田の到着したところに大きな広告が出てますね！
まだ転職してきて間もないので、会社紹介なのに「みたいです」が多くなる。

[FutureVuls](https://vuls.biz/) 出ました！
無料で試せるので、ぜひよろしくお願いします。

# We regret to inform you

[@akirakanaoka](https://twitter.com/akirakanaoka) さん。

研究者です。Usable Security、暗号の応用とシステム化、モバイルやってます。

トップカンファレンスとリジェクト。資料作成していたら心が折れそうになりましたｗ

研究者は論文を出してなんぼ。ジャーナルや海外カンファレンス、特にトップカンファレンスが評価が高い。
[セキュリティカンファレンスのランキング](http://faculty.cs.tamu.edu/guofei/sec_conf_stat.htm) がある。
影響度順みたいなもの。

トップカンファレンスは査読や評価が分厚い。
半年前に締め切って、3ヶ月ぐらいで査読される。
論文も緻密で長い。
序盤、中盤、終盤、隙がない。

自分の強みを知って、作戦を立てる。

お祈りメールまとめｗ

落ちていく中でわかってきたこと。

* とにかく新規性
* 採録通知まで3ヶ月、発表まで半年
    * 任期付き、ポスドク、学生だとけっこうつらい
* スピード感
* うまい文章 (英語とか関係ないレベル)
* 出さなきゃ通らない

次に向けての着実な一歩！

* Q&A
    * Q. セキュリティで次に来るのは？
    * A. 暗号の実装まわりじゃないだろうか

* [話者プロフィール](https://twitter.com/akirakanaoka/status/1040551095397830656)
* [採録されたとき](https://twitter.com/akirakanaoka/status/1040566631695446016)

# Your EV SSL certificate is crying -Gaps between SSL server operators and Contents designers-

RWC2018 に出したけど落ちた話。

suga さんがやってきたことを紹介。自分でも何をやっているのかいまいちわかっていない。
CRYPTREC とかいろいろな研究会の委員とかやってます。

Real World Crypto 2018 に投稿したけど落ちた話をします。

あなたの EV SSL 証明書が泣いている という話をします。
日本語版は JANOG で話した内容 ([JANOG39 EVSSL証明書が泣いている「検索窓問題」～ブラウザのセキュリティインディケータを意識していますか～](https://www.janog.gr.jp/meeting/janog39/program/evssl.html)) です。

とあるリストを元に、SSL の状況をサーベイしました。
弱い暗号を使っているサイトもおおいです。
EV SSL を買っていてもそのように表示されていないサイトがけっこうある。
検索窓の URL が http で mixed contents になっちゃっているものが多い。
せっかく高いのを買っているのに…

さらに、Chrome のバグで EV SSL がちゃんと表示されていない時期があった。一ヶ月ぐらい。
アドレスバーに組織名が表示されないバグ。

# サイバーセキュリティ錬金術

[@bbr_bbq](https://twitter.com/bbr_bbq) さん。

価値あるデータ: XSSの検査値/ブラックリスト を自動的に作る。

収集は手作業だけど、そのあとは自動で作る。
記号や HTML タグなど。遺伝的アルゴリズムの基になる遺伝子。
遺伝的アルゴリズムで、これらを価値あるデータに！

環境への適合度を評価する。

* HTML 構文として正しいか
* スクリプトが動作するか

このへんは、一年前に blog を書きました。

ここでできたものを GAN を使って増やしていく。

入力となるノイズを合成して行くことで、ベクトルの中間にあたるようなデータが出力できる。
これを利用してデータをさらに増やしていく。

実際に Discremeter を、WAF として使ってみた。
速度と False Negative が出てしまうのがネックだった。

今後の課題 (≒ Rejectされた理由)

今回のソースコードは github にあげてあります。

[資料](https://twitter.com/bbr_bbq/status/1040574520464031751)

# リジェクト・キャンプ行ってきましたヽ(´ー｀)ノ

[@sonodam](https://twitter.com/sonodam) さん。

一本目

SQL インジェクション攻撃の確率モデルと〜

* サンプル少なすぎ
* SVM と比べた？
* テストベッドとリアルなデータセット使ったか？
* 英語がいまいち

感想。英語はだいたい指摘されるねｗ
面白い論文はけっこう読んでるけど、内容勝負のやつだと英語がひどかったりするんだけどｗ

Accept のよいところを拾いつつ Reject 修正というのは、量やストーリーの問題もあってなかなか難しい。

領域によっては評価できる専門家はそんなに多くない？

数理モデル+セキュリティはまだまだ感。
そもそも人が少ない？
ものすごくずれたものの査読依頼が来たこともある。

新しいものを作っている分野では評価できる人がいないのは普通か。

リジェクト・キャンプというのを実はやったことがあって。
セキュリティキャンプに行けなかった人たちで集まって合宿しようぜ、というノリでやったことがある。2008年。
[Rejectキャンプに行ってきました](https://tech.nikkeibp.co.jp/it/pc/article/column/20080908/1007805/)という記事を書きました。
ぶっちゃけおもしろかったです。

* コメント
    * 境界領域は確かに難しいので、分野ではなくて「この人がいる」カンファレンスに出すのがよいのでは (suga)

# NKの内部事情

ととろさん。

2015年に北朝鮮が話題になった話。
RedStar を解析してみた

デモは具合悪くて動かず。残念。

OS に仕掛けがあって、通信が全部、北のサーバを通るようになっていた。
HTML がいじられて、Twitter, Facebook は表示しないようになっていた。
どう見ても Apple のソースをパクって作ってある。

RedStar の解析記事(英語)はググると出てくるので、興味のある方はそちらをどうぞ。
