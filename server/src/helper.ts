import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Helper {
  static getOpenAPIDoc(app: INestApplication<any>) {
    const doc_options = new DocumentBuilder()
      .setTitle(`API Document`)
      // Output securitySchemes to support Bearer authentication
      // See: https://docs.nestjs.com/openapi/security#bearer-authentication
      .addBearerAuth()
      .build();

    const doc = SwaggerModule.createDocument(app, doc_options);
    return doc;
  }
}
