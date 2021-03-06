import {Component, OnInit} from '@angular/core';
import {WindowSizeService} from '../../window-size.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

  scroll(s: string) {
    if (this.windowSizeService.getDevice() !== 'desktop') {
      document.getElementById(s).scrollIntoView({behavior: 'smooth', block: 'center'});
    } else {
      document.getElementById(s).scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
