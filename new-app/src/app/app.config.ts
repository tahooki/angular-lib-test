import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes as originRoutes } from 'origin-app';
import { routes as localRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      ...localRoutes,   // local routes를 로 새로 추가된 url은 덮어 쓰는 형식
      ...originRoutes,  // origin-app의 routes를 로드
    ])
  ]
};
