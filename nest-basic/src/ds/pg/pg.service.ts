import { Injectable } from "@nestjs/common";
import { Pool } from 'pg';

const dsConfig = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'sjy.928com',
  database: 'nest-basic',
};

// nest对整个模块有统一的管理
// 数据库连接池是在对象初始化时创建的
// 是在模块初始化时连接
// 是在模块销毁时断开连接

@Injectable()
export class PgService {
  private pool:Pool;

  constructor() {
    this.pool = new Pool(dsConfig);
  }

  onModuleInit() {
    this.pool.connect((err, client, done) => {
      if (err) {
        console.error('Error connecting to the database', err);
      } else {
        console.log('Connected to the database');
      }
    });
  }

  onModuleDestroy() {
    this.pool.end();
  }

  /**
   * 提供方法来调用数据库的查询
   */
  async query(sql: string, params: any[] = []) {
   try{
     return await this.pool.query(sql, params);
   } catch (error) {

    // 业务异常一般不要吞掉（会有地方统一管理）
    console.error('Error querying the database', error);
    throw error;
   }
  }

}