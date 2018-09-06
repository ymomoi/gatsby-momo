---
title: Mailman の引っ越し
date: "2012-05-08T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2012050800/"
category: "Server"
tags:
  - "Mail"
description: さくらの VPS でプランを乗り換えたので，サーバの引っ越しをする必要ができた．ML の引っ越しのために，Mailman の設定移行方法をメモ．
---
さくらの VPS でプランを乗り換えたので，サーバの引っ越しをする必要ができた． ML の引っ越しのために，Mailman の設定移行方法をメモ．

Mailman はパッケージで導入．
普通に入れたら英語環境だけになってしまったので，インストール後にパッケージ設定をもう一度叩いて，日本語環境をインストール．

```shell
sudo dpkg-reconfigure mailman
```

パーミッションをチェックするプログラムを実行．

```shell
sudo check_perms -f
```

サイトの管理者パスワードを設定．

```shell
sudo mmsitepass
```

基本設定をする．
基本的には mm_cfg.py を書き写していくだけ．

mailman が生成する aliases ファイルを参照するように，Postfix を設定．
Apache も引っ越し元を参考にしながら設定を写す．

引っ越し元サーバの mailman ディレクトリ以下，lists ディレクトリに ML の設定があるので，必要な ML のディレクトリを丸ごとコピーする．

archive ディレクトリに過去記事があるので，private または public ディレクトリも丸ごとコピー．

mailman/bin/genalias コマンドで aliases を設定．

ML の管理者パスワードだけが，上記の方法ではコピーできない． ML ごとにパスワードを設定し直す．

__5/10追記:__
上記の手順では，各 ML の設定ファイルに埋まっているサイトの URL が変更されない．
URL が違うために，投稿が保留されたメールの承認などができなくなった．
修正するためには次のコマンドを実行する．

```shell
sudo withlist -l -r fix_url ML名
```
