import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>NEW-APP 호텔 목록</h2>
    <ul>
      <li><a routerLink="/hotels/1">파크 하얏트</a></li>
      <li><a routerLink="/hotels/2">리츠칼튼</a></li>
    </ul>
    <div>
      <a routerLink="/cars">렌터카 보러가기</a>
    </div>
  `
})
export class HotelListComponent {}
