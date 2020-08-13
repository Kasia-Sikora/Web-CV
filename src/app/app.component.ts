import {Component, HostListener, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation, tabletSlideInAnimation} from './animations';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation, tabletSlideInAnimation]
})
export class AppComponent implements OnInit {

  title = 'CV';

  public innerWidth: any;
  public $device = new BehaviorSubject<string>('desktop');

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (window.innerWidth < 1160) {
      this.$device.next('tablet');
    } else {
      this.$device.next('desktop');
    }
    // useAnimation(slideInAnimation, {
    //   params: {
    //     translateIn: 'translateX(-70%)',
    //     translateOut: 'translateX(0%)'
    //   }
    // });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
