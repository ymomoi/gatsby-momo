---
title: Evernote から Boostnote にノートを移す
date: "2019-01-31T13:00:00.000Z"
layout: post
draft: false
path: "/posts/2019013100/"
category: "App"
tags:
  - "Boostnote"
description: "Boostnote を使ってみたらよかったので、Evernote からノートを移行することにしました。"
---
[Boostnote を使ってみる](https://m.bug.org/posts/2018090700/)で書いたとおり、Boostnote をときどき使ってました。
やはり Markdown を書き留めるにはとても使いやすかったので、PC で使うメモツールはこちらに乗り替えることに決めました。
メモツールはやはり蓄積と検索がキモだと思うので、Evernote で蓄えていた文書はまるごと移行しておきたい… ということで、ノートの引っ越しをしようと。

Evernote からのデータ移行ツールとしては [ever2boost](https://github.com/BoostIO/ever2boost) があるんですが、[Evernote の Developer token がここしばらく提供されていない](https://qiita.com/kilica/items/aca598fd0c85be4a8bdf)ようです。
確かに temporarily disabled となってますね… (2019-01-29現在)

この Qiita の記事では HTML 出力からテキストを切り出していますが、Evernote は XML (.enex) 出力もできて、ever2boost コマンドはそのファイルからのインポートもできるようだったので、その方法を試してみることにしました。

ever2boost はあまり更新されていないようで、単に取ってきて実行するだけでは動きませんが、実行時に出るエラーは Issue に解決策があります。

パッチを当てて実行すると Boostnote の読み込み形式 (.cson) ファイルが生成されて、とりあえずは全部のノートが読み込める状態になったのですが、個人的にイマイチなことが2つ…

* Markdown 形式で書いていない(大部分の)ノートが、とても詰まって表示される
* ノートの作成/更新時刻が引き継がれない

.enex 形式のファイルを見ると、どうやら \<br /> タグが入っているところは改行されているけれど、Evernote で見た目は改行しているところでも \<div>〜\</div> タグで囲まれたところはすべてくっついてしまっている模様。
とりあえず \<div> タグを外しているあたりを見つけて改行を入れるようにしたら、それっぽく読めるようにはなったのでそれでよいことにしました。

もうひとつのノートの作成/更新時刻に関しては、.cson ファイルにもそういう項目があったので、そこの出力部分を元の XML から拾ってくるように変更。

これでとりあえずは見れる状態のノートを移行できたので満足。
実行方法はこんな感じです。

```Shell
ever2boost convert -d ~/BoostNote/ ~/tmp/Evernote/inbox.enex
```

上記の変更を含んだ ever2boost はこちらにあります: https://github.com/ymomoi/ever2boost

移行ツールって、基本的には各人が一回使ったら終わりなので、頑張らないとメンテされにくい傾向はありますね…ｗ
