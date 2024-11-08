import { Routes } from '@angular/router';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./flight-list/flight-list.component').then(m => m.FlightListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./flight-detail/flight-detail.component').then(m => m.FlightDetailComponent)
  }
];
