import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {WindowSizeService} from '../../../window-size.service';

@Component({
  selector: 'app-front-mentor',
  templateUrl: './frontend-project.component.html',
  styleUrls: ['./frontend-project.component.scss']
})
export class FrontendProjectComponent implements OnInit {

  // $project = new BehaviorSubject<string>('');

  // constructor(private route: ActivatedRoute, private router: Router) {
  // }

  constructor(private windowSizeService: WindowSizeService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.windowSizeService.getDevice() === 'mobile') {
      window.scroll(0, 480);
    } else {
      window.scroll(0, 590);
    }
  }

  // ngOnInit(): void {
  //   const param = this.route.snapshot.paramMap.get('name');
  //   if (param) {
  //     this.$project.next(param);
  //   }
  // }

  onBack() {
    this.router.navigate(['./projects']);
  }
}
