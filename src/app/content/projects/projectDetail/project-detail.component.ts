import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  $project = new BehaviorSubject<string>('');

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('name');
    if (param) {
      this.$project.next(param);
      console.log(this.$project.getValue());
    }
  }

  onBack() {
    this.router.navigate(['./projects']);
  }
}
