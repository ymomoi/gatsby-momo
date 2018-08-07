---
title: Proxy を使わなければならない環境で plenv install-cpanm
date: "2015-04-14T12:00:00.000Z"
layout: post
draft: false
path: "/posts/2015041400/"
category: "Dev"
tags:
  - "Perl"
  - "env"
description: "proxy を通さないと外に出れない環境で、plenv instlal-cpanm が失敗する時の自分用の覚え書き。"
---

proxy を通さないと外に出れない環境で、plenv instlal-cpanm が失敗する時の自分用の覚え書き。
ちゃんと https://github.com/tokuhirom/plenv にも書いてあるけど、curl のエラーメッセージでぐぐっても引っかからなかったので、見落としてたのでｗ

```shell
% PLENV_INSTALL_CPANM="-v" plenv install-cpanm
```
