---
title: MySQL 5.5 install on CentOS 6.2
date: "2012-04-17T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2012041700/"
category: "Server"
tags:
  - "Linux"
  - "CentOS"
description: CentOS 6.2 に MySQL 5.5 をインストールしようとしたら，依存関係があってちょっと悩んだ．
---

CentOS 6.2 に MySQL 5.5 をインストールしようとしたら，依存関係があってちょっと悩んだ．
具体的には，postfix などが依存している mysql-libs 5.1 がコンフリクトする．
この依存関係をどう解消したものかと調べてみると，remi というリポジトリのものを使っているようだった．
ひとまずそれにならってインストールしてみることにする．

1. epel, remi をインストール
```shell
sudo rpm -Uvh http://ftp-srv2.kddilabs.jp/Linux/distributions/fedora/epel/6/x86_64/epel-release-6-5.noarch.rpm
sudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
```
1. mysql 関連パッケージをアップデート
```shell
sudo yum -y --enablerepo=remi install mysql-server mysql-devel mysql-client
```
1. mysqld 設定
```shell
sudo chkconfig mysqld on
sudo service mysqld start
sudo mysql_secure_installation
```
1. httpd, phpMyAdmin をインストール
```shell
sudo yum -y install --enablerepo=epel,remi httpd php phpMyAdmin php-mysql
```
1. phpMyAdmin 設定
```shell
sudo vi /etc/httpd/conf.d/phpMyAdmin.conf
```

参考:

* [Rails3備忘録: CentOS6にMySQL5.5をインストール](http://rails3beginner.blogspot.jp/2012/01/centos6mysql55.html)
* [CentOSのyumにEPELレポジトリを追加する | Linuxとかをつついてみるブログ](http://www.limemo.net/blog/2012/03/add-epe-repository-of-yum-on-cenots.html)
