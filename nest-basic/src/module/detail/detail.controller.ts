import { Controller, Get, UseGuards } from '@nestjs/common';
import { DetailService } from './detail.service';
import { HttpException, HttpStatus,Param } from '@nestjs/common';
import { DetailPipe } from 'src/pipes/DetailPipe';
import { AuthGuard } from 'src/guards/Auth';
import { PgService } from '../../ds/pg/pg.service';

@Controller('/detail')
export class DetailController {
  constructor(private readonly detailService: DetailService, private readonly pgService: PgService) {}



  @Get('action/pg')
  async getPg(){
    const res = await this.pgService.query('SELECT * FROM users');
    console.log('res---',res);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getHello(@Param('id',DetailPipe) id: string): string {
    console.log('id---',id);
    return this.detailService.getHello();
  }

}
