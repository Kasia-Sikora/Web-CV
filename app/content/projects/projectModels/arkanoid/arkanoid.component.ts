import {Component} from '@angular/core';

@Component({
  selector: 'app-arkanoid',
  templateUrl: './arkanoid.component.html',
  styleUrls: ['./arkanoid.component.scss']
})
export class ArkanoidComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
