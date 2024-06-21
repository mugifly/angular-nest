import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Helper } from './helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Change the URL prefix to `/api` on backend
  app.setGlobalPrefix('api');

  // Enable Swagger UI for development env
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    // Build the OpenAPI document (published under `/api/docs`) with Swagger
    const doc = Helper.getOpenAPIDoc(app);
    SwaggerModule.setup('api/docs', app, doc);
  }

  // Start the server
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
