import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  template: `
    <h2>항공편 상세 정보</h2>
    <p>선택된 항공편 ID: {{flightId}}</p>
  `
})
export class FlightDetailComponent {
  flightId: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.flightId = params['id'];
    });
  }
}
