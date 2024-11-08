import { Routes } from '@angular/router';

export const CAR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./car-list/car-list.component').then(m => m.CarListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./car-detail/car-detail.component').then(m => m.CarDetailComponent)
  }
];
