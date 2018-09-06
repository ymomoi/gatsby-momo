---
title: PDF を cbz 形式にして，kobo touch で読みやすくする
date: "2012-07-25T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2012072500/"
category: "App"
tags:
  - "PDF"
description: 楽天で kobo touch が安かったので(笑)買ってみたんだけれど，PC Watch のレビューなどにも書かれているとおり，手持ちの PDF を読むにはちょっと手間が多すぎるなと感じた．
---
楽天で kobo touch が安かったので(笑)買ってみたんだけれど，[PC Watch のレビュー](http://pc.watch.impress.co.jp/docs/topic/feature/20120725_548865.html)などにも書かれているとおり，手持ちの PDF を読むにはちょっと手間が多すぎるなと感じた．

自炊ブームなどのおかげで先達のノウハウがたくさんあって，同僚からそのあたりのツールを教えて貰ったので，手元にあった PDF を cbz 形式に変換して突っ込んでみたら幸せになれました :-D

パスワードをかけた PDF がいくつかあって，このあたりのものをどうやって変換するかいろいろ調べてみたけれど，画像にするだけなら pdftoppm を使うのが一番確実で早かった．
それから cbz 形式を作るので定評ある ChainLP というツールは Windows 用で，Mac と Windows 両方使うことになってしまったけど，まあ，手元にはどちらの環境もあるから気にしないことにする(笑)．

pdftoppm は xpdf とか poppler, poppler-utils というパッケージに入ってます．
Mac では簡単にできたけど，Linux でやろうとしたらフォント関連の Warning がたくさん出た．
xpdf で綺麗に表示が出る状態までちゃんとインストールしないとできないのかもしれない．
それと，ppm を変換するために ImageMagick が必要です．

下記がその手順．

1. pdf からページ毎に分かれた ppm ファイルを生成する．
   画像は後でリサイズされるので，少し大きめに 300dpi 指定して取り込んでみた．
   ファイルサイズが大きくなるので注意．
   ```shell
mkdir test
pdftoppm -r 300 test.pdf test/page
(test/page-XXX.ppm というファイルが，ページ数分できる)
   ```
1. ppm ファイルを jpg に変換して，元ファイルを削除する．
   ```shell
mogrify -format jpg test/page*.ppm
rm test/page*.ppm
   ```
1. ChainLP で，画像ファイルの入ったフォルダから cbz 形式のファイルを生成する．

ChainLP が，画像余白のトリミングをそこそこしてくれるので，拡大しなくても読める程度になりました．
PDF を直接入れたときは，いろいろなところで書かれている kobo touch の PDF 表示不具合もあって使えない感じだったけど，これなら普段読むのにも使えるかなぁ．
