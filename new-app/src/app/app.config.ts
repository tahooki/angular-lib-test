import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes as originRoutes } from 'origin-app';
import { routes as localRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      ...localRoutes,    // 그 다음 local routes를 로드
      ...originRoutes,  // origin-app의 routes를 먼저 로드
    ])
  ]
};
