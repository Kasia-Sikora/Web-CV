import {Component} from '@angular/core';

@Component({
  selector: 'app-foodstuff',
  templateUrl: './foodstuff.component.html',
  styleUrls: ['./foodstuff.component.css']
})
export class FoodstuffComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
