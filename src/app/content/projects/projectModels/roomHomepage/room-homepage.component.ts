import {Component} from '@angular/core';

@Component({
  selector: 'app-room-homepage',
  templateUrl: './room-homepage.component.html',
  styleUrls: ['./room-homepage.component.scss']
})
export class RoomHomepageComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
