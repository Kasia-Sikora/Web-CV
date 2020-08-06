import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  isVisible: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isVisible = true;
  }

}
