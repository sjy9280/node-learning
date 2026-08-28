import { Module } from '@nestjs/common';
import { AppController } from './auth.controller';
import { AppService } from './auth.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// 装饰器 注解
// 在react 里面，高阶组件也是一种装饰器
// 如果不用装饰器的写法的话
// Module(AppModule)()
// redux @connect withStore