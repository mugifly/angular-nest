import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Change the URL prefix to `/api` on backend
  await app.listen(3000);
}
bootstrap();
