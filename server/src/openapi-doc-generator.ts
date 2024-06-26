import { Test } from '@nestjs/testing';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { Helper } from './helper';

async function bootstrap(): Promise<void> {
  // Get the modules included by AppModule
  const imports = Reflect.getMetadata('imports', AppModule);
  const modules = imports.filter((item: any) => {
    return typeof item === 'function';
  });

  // Get the controllers and providers
  let controllers = Reflect.getMetadata('controllers', AppModule);
  let providers = Reflect.getMetadata('providers', AppModule);
  for (const mod of modules) {
    controllers = controllers.concat(Reflect.getMetadata('controllers', mod));
    providers = providers.concat(Reflect.getMetadata('providers', mod));
  }

  // Generate the mock providers
  const mockedProviders = providers
    .filter((provider: any) => {
      return provider !== undefined;
    })
    .map((provider: any) => {
      return {
        provide: provider,
        useValue: {},
      };
    });

  // Generate an application instance
  const testingModule = await Test.createTestingModule({
    imports: [AppModule],
    controllers: controllers,
    providers: mockedProviders,
  }).compile();

  const app = testingModule.createNestApplication();

  // Change the URL prefix to `/api` on backend
  app.setGlobalPrefix('api');

  // Generate API JSON
  const doc = Helper.getOpenAPIDoc(app);
  const docJson = JSON.stringify(doc);

  // Check the argument
  let outputPath = null;
  for (const arg of process.argv) {
    if (arg.match(/^--output=(.+)$/)) {
      outputPath = RegExp.$1;
      break;
    }
  }

  // Output JSON document
  if (outputPath) {
    fs.writeFileSync(outputPath, docJson);
  } else {
    console.log(docJson);
  }
}

bootstrap();
