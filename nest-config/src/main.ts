import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const port = process.env.PORT ?? 3001;

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
