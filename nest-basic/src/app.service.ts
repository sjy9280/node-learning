import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // 服务端相关数据处理，逻辑处理
    // 操作数据库
    // 调用第三方接口
    // 数据加工
    return 'Hello World!';
  }
}
