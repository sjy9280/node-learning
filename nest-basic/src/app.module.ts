import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetailModule } from './module/detail/detail.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';

@Module({
  imports: [DetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // 全局中间件，建议按照全局注册的方式来处理
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes('*');
  // }
}


// 装饰器 注解
// 在react 里面，高阶组件也是一种装饰器
// 如果不用装饰器的写法的话
// Module(AppModule)()
// redux @connect withStore