import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/flights">항공편 목록</a></li>
        <li><a routerLink="/hotels">호텔 목록</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      padding: 1rem;
      background-color: #f8f9fa;
    }
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 1rem;
    }
    a {
      text-decoration: none;
      color: #333;
    }
    a:hover {
      color: #007bff;
    }
  `]
})
export class MainComponent {}
