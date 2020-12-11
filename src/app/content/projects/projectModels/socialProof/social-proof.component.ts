import {Component} from '@angular/core';

@Component({
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss']
})
export class SocialProofComponent {

  constructor() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
