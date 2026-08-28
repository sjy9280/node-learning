import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/LoggerMiddleware';
import { HttpErrorFilter } from './filters/ExceptionFilter';
import { CodeErrorFilter } from './filters/CodeErrorFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(LoggerMiddleware);
  app.useGlobalFilters(new HttpErrorFilter(), new CodeErrorFilter());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
