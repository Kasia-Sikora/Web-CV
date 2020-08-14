import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  panelOpenState: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(s: string) {
    const d = document.getElementById(s).scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
}
