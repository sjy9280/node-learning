import { Module } from "@nestjs/common";
import {PgService} from './pg.service';

@Module({
  imports:[], // 需要导入的外部模块
  exports:[PgService], // 往外部暴露的模块
  // controllers:[],  // 控制器,定义路由
  providers:[PgService] // 提供可注入的一些服务
})

export class PgModule {}


// 动态模块
