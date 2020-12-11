import {Component} from '@angular/core';

@Component({
  selector: 'app-life-of-ants',
  templateUrl: './life-of-ants.component.html',
  styleUrls: ['./life-of-ants.component.scss']
})
export class LifeOfAntsComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
