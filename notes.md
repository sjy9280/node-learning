# 数据库与缓存技术

## docker 基础使用

服务端内容，涉及到环境配置问题



Mac

- MacOS 15.0.1
- MacOS 14

Windows

- Windows7
- Windows11

Linux

- centos
- Ubuntu

给我们环境准备带来了巨大麻烦

docker提倡系统中最核心的kernel提取出来，单独作为一个微型系统

### 核心概念

- image

  - 可以自己自定义镜像，也可以使用官方镜像，镜像通俗来说就是：一个极简版系统+自己定义的服务

- container

  - 容器，镜像运行后

- volume

- docker hub

  代码发布到github

  docker也有一个集中仓库，用来存储image



### 常用命令

- `docker pull <镜像名>`：从 Docker Hub 拉取镜像
- `docker run <镜像名>`：启动一个容器
- `docker ps`：查看正在运行的容器
- `docker stop <容器ID>`：停止运行中的容器
- `docker rm <容器ID>`：删除容器
- `docker rmi <镜像ID>`：删除镜像
- `docker exec -it <容器ID> /bin/bash`：进入正在运行的容器并打开 Bash


