import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.VERSION);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
