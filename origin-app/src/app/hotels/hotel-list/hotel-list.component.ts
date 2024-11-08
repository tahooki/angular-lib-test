import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>호텔 목록</h2>
    <ul>
      <li><a routerLink="/hotels/1">그랜드 호텔</a></li>
      <li><a routerLink="/hotels/2">시티 호텔</a></li>
    </ul>
  `
})
export class HotelListComponent {}
