import {Component, OnInit} from '@angular/core';
import {WindowSizeService} from '../../window-size.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

}
