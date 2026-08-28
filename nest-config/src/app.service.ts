import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm"
import { User } from './entities/User';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User) 
    private  usersRepository: Repository<User>){}

  async getHello(): Promise<string> {
    const res = await this.usersRepository.find();
    console.log("res", res);
    // 数据库操作
    // 发送邮件操作
    // 登录注册读库写库
    // 视频转码
    // 定时任务
    // 其他业务逻辑
    return 'Hello World!';
  }
}
