---
title: Ubuntu Server 11.10 upgrade
date: "2011-11-07T20:24:00.000Z"
layout: post
draft: false
path: "/posts/2011110700/"
category: "Server"
tags:
  - "Linux"
  - "Ubuntu"
description: Ubuntu Server を 11.10 に upgrade した．
---

Ubuntu Server を 11.10 に upgrade した．
基本的に手順どおりにやればはまりどころは少ないと思う．
が，VMware ゲストとして動かしている場合，reboot 後にはまるポイントがあるので注意．

* [Ubuntu 11.10 へアップグレードを行うには - Ubuntu Japanese Wiki](https://wiki.ubuntulinux.jp/UbuntuTips/Install/UpgradeOneiric)

VMware Server 上で動かしていた VM では下記の問題を踏んだ．
ネットワークが繋がらなくなるので，コンソールをとらないと解消できない．
ESXi 上の VM は大丈夫だったなぁ．

* [Ubuntu 11.10 &ldquo;Booting system without full network configuration&rdquo; | Total Computers USA](http://www.totalcomputersusa.com/2011/10/ubuntu-11-10-booting-system-without-full-network-configuration/)
