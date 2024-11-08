import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'flights',
        loadChildren: () => import('./flights/flights.routes').then(m => m.FLIGHTS_ROUTES)
      },
      {
        path: 'hotels',
        loadChildren: () => import('./hotels/hotels.routes').then(m => m.HOTELS_ROUTES)
      }
    ]
  }
];
