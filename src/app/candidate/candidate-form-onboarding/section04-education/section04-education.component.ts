import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-section04-education',
  templateUrl: './section04-education.component.html',
  styleUrls: ['./section04-education.component.css']
})
export class Section04EducationComponent implements OnInit {
  otherQualification: boolean = false;
  scholarship: boolean = false;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-green',
      dateInputFormat: 'MM/DD/YYYY'
    }
  }

  ngOnInit(): void {
  }

}
