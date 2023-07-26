## 描述

属于 个人博客 的前端工程.

## 安装依赖

```shell
yarn
yarn add -D sass
```

## 项目启动

```shell
yarn dev
```

## 构建镜像

```shell
docker build -t general_bolg_20230614_0 -f Runner.Dockerfile .
//arm64平台构建方式（在amd上运行）
docker buildx build  --platform linux/amd64 -t yiranlater/general_bolg_20230614_0 -f Runner.Dockerfile .
```

## 项目技术点

```

```
