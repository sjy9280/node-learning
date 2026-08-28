import { ExceptionFilter, HttpException, ArgumentsHost} from '@nestjs/common';

export class CodeErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const status = exception.getStatus();
    console.log(`~ CodeErrorFilter ~ ${status}`);
    res.json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: exception.message,
      detail:'nest-learning code error'
    });
  }
}