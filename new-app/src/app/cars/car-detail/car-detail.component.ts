import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  template: `
    <h2>렌터카 상세 정보</h2>
    <p>선택된 차량 ID: {{carId}}</p>
  `
})
export class CarDetailComponent {
  carId: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
    });
  }
}
