import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-section10-start-date',
  templateUrl: './section10-start-date.component.html',
  styleUrls: ['./section10-start-date.component.css']
})
export class Section10StartDateComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-green',
      dateInputFormat: 'MM/YYYY'
    }

  }

  ngOnInit(): void {
  }

}
