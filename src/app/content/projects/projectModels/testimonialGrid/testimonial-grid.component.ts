import {Component} from '@angular/core';

@Component({
  selector: 'app-testimonial-grid',
  templateUrl: './testimonial-grid.component.html',
  styleUrls: ['./testimonial-grid.component.scss']
})
export class TestimonialGridComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
