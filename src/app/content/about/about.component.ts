import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowSizeService} from '../../window-size.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    // document.getElementById('about').scrollIntoView({behavior: 'smooth', block: 'start'});
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

}
