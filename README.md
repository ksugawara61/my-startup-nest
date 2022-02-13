# my-startup-nest

[NestJS](https://docs.nestjs.com/)の練習用リポジトリ

## コマンドリスト

- コントローラーの作成

```
$  yarn nest generate co cats
```

- Providerの作成

```
$ yarn nest generate s cats
```

- Interfaceの作成

```
$ yarn nest generate interface cats/interfaces/cat
```

- Moduleの作成

```
$ yarn nest g module cats
```

- Middlewareの作成

```
$ yarn nest g mi common/logger
```

## DB接続検証方法

- MySQLのDockerコンテナを起動 & DBの作成

```
$ docker container run --rm -d -e MYSQL_ROOT_PASSWORD=mysql -p 3306:3306 --name mysql mysql:8.0
$ mysql -u root -h 127.0.0.1 -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.20 MySQL Community Server - GPL

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> create database test;
Query OK, 1 row affected (0.01 sec)

mysql> exit
Bye
```

- MySQLのDockerコンテナの停止 & 削除


```
$ docker rm -f mysql
```

## ライブラリ

| 名前 | URL | 用途 |
| :--- | :--- | :--- |
| class-validator | https://github.com/typestack/class-validator | |
