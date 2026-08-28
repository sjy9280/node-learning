import { ExceptionFilter, HttpException, ArgumentsHost} from '@nestjs/common';

export class HttpErrorFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const status = exception.getStatus();
    console.log(`~ ExceptionFilter ~ ${status}`);
    res.json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.message,
      detail:'nest-learning http error'
    });
  }

}