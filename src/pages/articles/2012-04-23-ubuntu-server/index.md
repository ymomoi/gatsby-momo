---
title: ubuntu server に自動アップデート設定
date: "2012-04-23T00:00:00.000Z"
layout: post
draft: false
path: "/posts/2012042300/"
category: "Server"
tags:
  - "Linux"
  - "Ubuntu"
description: ubuntu server にセキュリティパッチなどを自動アップデートするように設定する．unattended-upgrades パッケージを入れれば OK．
---

ubuntu server にセキュリティパッチなどを自動アップデートするように設定する．
unattended-upgrades パッケージを入れれば OK．

```shell
apt-get update
apt-get install unattended-upgrades
```

設定ファイルは /etc/apt/apt.conf.d/50unattended-upgrades にある．適用するアップデート種類を指定する場合はこれを編集する．

```text
Unattended-Upgrade::Allowed-Origins {
        "${distro_id} ${distro_codename}-security";
//      "${distro_id} ${distro_codename}-updates";
//      "${distro_id} ${distro_codename}-proposed";
//      "${distro_id} ${distro_codename}-backports";
};
```

自動アップデートの対象にしたくないパッケージはここに記述する．

```text
Unattended-Upgrade::Package-Blacklist {
//      "vim";
//      "libc6";
//      "libc6-dev";
//      "libc6-i686";
};
```

アップデートログをメールで送る設定．
成功/失敗共に通知するのか，失敗したときのみを選択できる．

```text
// Send email to this address for problems or packages upgrades
// If empty or unset then no email is sent, make sure that you
// have a working mail setup on your system. The package 'mailx'
// must be installed or anything that provides /usr/bin/mail.
Unattended-Upgrade::Mail "root@localhost";
// Set this value to "true" to get emails only on errors. Default
// is to always send a mail if Unattended-Upgrade::Mail is set
//Unattended-Upgrade::MailOnlyOnError "true";
```
