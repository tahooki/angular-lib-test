import { Routes } from '@angular/router';
import { MainComponent } from 'origin-app';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,  // 기존 origin-app의 MainComponent
    children: [ // 새로 추가된 라우트
      {
        path: 'hotels',
        loadChildren: () => import('./new-hotels/hotels.routes').then(m => m.HOTEL_ROUTES)
      },
      {
        path: 'cars',
        loadChildren: () => import('./cars/cars.routes').then(m => m.CAR_ROUTES)
      }
    ]
  }
];
