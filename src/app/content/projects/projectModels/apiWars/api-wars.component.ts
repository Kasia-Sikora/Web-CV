import {Component} from '@angular/core';

@Component({
  selector: 'app-api-wars',
  templateUrl: './api-wars.component.html',
  styleUrls: ['./api-wars.component.css']
})
export class ApiWarsComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
