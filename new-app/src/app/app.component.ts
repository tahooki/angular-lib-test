import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>New App</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'new-app';
}
