import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-frontend-detail',
  templateUrl: './frontend-project-detail.component.html',
  styleUrls: ['./frontend-project-detail.component.scss']
})
export class FrontendProjectDetailComponent implements OnInit {

  $project = new BehaviorSubject<string>('');

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('name');
    if (param) {
      this.$project.next(param);
    }
  }

  onBack() {
    this.router.navigate(['./frontend-challenges']);
  }
}
