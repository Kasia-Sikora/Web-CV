import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowSizeService} from '../../window-size.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    // document.getElementById('skills').scrollIntoView({behavior: 'smooth', block: 'start'});
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

  scroll(s: string) {
    if (this.windowSizeService.getDevice() !== 'desktop') {
      document.getElementById(s).scrollIntoView({behavior: 'smooth', block: 'center'});
    }else{
      document.getElementById(s).scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
