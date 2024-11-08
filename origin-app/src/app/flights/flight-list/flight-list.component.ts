import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>항공편 목록</h2>
    <ul>
      <li><a routerLink="/flights/123">항공편 123</a></li>
      <li><a routerLink="/flights/124">항공편 124</a></li>
    </ul>
  `
})
export class FlightListComponent {}
