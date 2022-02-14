---
title: docker 查看Java项目日志
date: 2022-02-12
tags:
  - docker
categories:
  - 微服务
---

# 启动jar项目
```shell
java -jar halo-1.4.15.jar --server.port=80
```


# 查看日志
```shell
docker logs -f --tail 100 equipment
```