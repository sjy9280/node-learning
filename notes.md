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



## postgresql

### 基本数据类型

- 整数类型：`SMALLINT` `INTEGER` `BIGINT`
- 浮点数类型：`REAL` `DOUBLE PRECISION`
- 字符类型：`VARCHAR(n)` `TEXT`
- 布尔类型：`BOOLEAN`

postgresql 有更丰富的字段类型

- 数组：支持数组类型，可以存储一组同类型数据

  ```postgresql
  CREATE TABLE example (data INT[])
  ```

- JSON/JSONB：Postgre SQL支持JSON和JSONB数据类型，允许存储和查询JSON格式数据‘

  ```postgresql
  CREATE TABLE user (id SERIAL PRIMARY KEY, info JSONB)
  ```

- UUID：PostgreSQL内置了对UUID的支持，适合用于唯一标识符

  ```postgresql
  CREATE TABLE devices (device_id UUID PRIMARY KEY)
  ```



为什么数据库都需要事务？

淘宝买东西，在下单环节有几步：支付、生成订单、生成物流信息

如果中间某一个操作失败，则所有的操作均需要取消掉---事务





redis过期什么场景使用？

1. 登录态
2. 飞书文档，协同，房间，广播

### redis持久化

虽然Redis是一个内存数据库，但它支持将数据持久化到磁盘，避免数据丢失。Redis提供了两种持久化方式:RDB (Redis DataBase快照和AOF (Append-Only File) 日志。

- RDB持久化
  RDB是将Redis数据快照保存为二进制文件的持久化方式，可以定期将数据写入磁盘。RDB的优点是文件小，适合备份，但它不能实时保存数
  据。
- AOF持久化
  AOF是将每条写命令都记录到日志中的持久化方式。AOF允许Redis通过重放日志文件来重建数据库，支持更高的实时性。





## Nest

Controller：负责请求的定义

1. 参数校验，请求来时校验（interceptor）
2. 权限控制（Guards）
3. 拦截器处理响应参数

Service：负责数据处理（查数据库）

1. 数据库操作
2. 文件IO操作
3. 数据处理

Module：

   整合Controller、Service等，其他模块









