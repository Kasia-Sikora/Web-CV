import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowSizeService} from '../../window-size.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private windowSizeService: WindowSizeService) {
  }

  ngOnInit(): void {
    // document.getElementById('projects').scrollIntoView({behavior: 'smooth', block: 'start'});
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

}
