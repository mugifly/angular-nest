import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { ApiModule } from './.api-client/api.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      ApiModule.forRoot({
        rootUrl: '',
      }),
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
