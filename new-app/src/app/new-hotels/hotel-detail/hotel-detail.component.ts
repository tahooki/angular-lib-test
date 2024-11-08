import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  template: `
    <h2>NEW-APP 호텔 상세 정보</h2>
    <p>선택된 호텔 ID: {{hotelId}}</p>
  `
})
export class HotelDetailComponent {
  hotelId: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.hotelId = params['id'];
    });
  }
}
