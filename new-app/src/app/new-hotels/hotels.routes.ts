import { Routes } from '@angular/router';

export const HOTEL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./hotel-list/hotel-list.component').then(m => m.HotelListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./hotel-detail/hotel-detail.component').then(m => m.HotelDetailComponent)
  }
];
