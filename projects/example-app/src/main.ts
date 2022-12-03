import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { mainRoutes } from './main.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      mainRoutes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),

    // NO...
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
