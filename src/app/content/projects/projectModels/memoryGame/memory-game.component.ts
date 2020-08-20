import {Component} from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
