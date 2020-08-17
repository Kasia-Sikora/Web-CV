import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/Katarzyna_Sikora_CV.pdf';
    const pdfName = 'Katarzyna_Sikora_CV';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  goToLink(page: string) {
    window.open(page);
  }
}
