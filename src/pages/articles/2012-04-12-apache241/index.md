---
title: Apache 2.4.1 install
date: "2012-04-12T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2012041200/"
category: "Server"
tags:
  - "Apache"
description: "Apache 2.4.1 をインストールしてみる．"
---

Apache 2.4.1 をインストールしてみる．

2.4 系では，APR, APR-Util は添付されなくなったようだ．
自分で取得してインストールすることにする．
一緒にインストールする手段もあるけど，別に入れておいてもいいのでそちらの方法で．

```shell
cd work/apr-1.4.6
./configure --prefix=/var/service/local
make
make test
make install
cd ../apr-util-1.4.1
./configure --prefix=/var/service/local
make
make test
make install
```

httpd をインストール．
configure の段階で足りないライブラリは足しておくこと．

```shell
./configure --prefix=/var/service/local/apache24 \
    --with-apr=/var/service/local \
    --with-apr-util=/var/service/local \
    --enable-mods-shared="reallyall"
make
make install
```

特に問題なくインストール完了．
