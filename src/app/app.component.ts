import {Component, HostListener, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';
import {WindowSizeService} from './window-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  title = 'CV';

  constructor(private windowService: WindowSizeService) {
  }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 670) {
      this.windowService.setDevice('mobile');
    }else if (window.innerWidth > 670){
      this.windowService.setDevice('tablet');
    }
  }
}
