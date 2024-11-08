import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>렌터카 목록</h2>
    <ul>
      <li><a routerLink="/cars/1">테슬라 Model 3</a></li>
      <li><a routerLink="/cars/2">현대 아이오닉 5</a></li>
    </ul>
  `
})
export class CarListComponent {}
