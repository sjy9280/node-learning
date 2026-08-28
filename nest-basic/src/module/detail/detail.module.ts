import { Module } from '@nestjs/common';
import { DetailController } from './detail.controller';
import { DetailService } from './detail.service';
import { PgModule } from '../../ds/pg/pg.module';

@Module({
  imports: [PgModule],
  controllers: [DetailController],
  providers: [DetailService],
})
export class DetailModule {}


// 装饰器 注解
// 在react 里面，高阶组件也是一种装饰器
// 如果不用装饰器的写法的话
// Module(AppModule)()
// redux @connect withStore