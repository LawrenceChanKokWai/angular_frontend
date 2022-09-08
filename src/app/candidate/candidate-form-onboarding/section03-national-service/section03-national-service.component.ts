import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-section03-national-service',
  templateUrl: './section03-national-service.component.html',
  styleUrls: ['./section03-national-service.component.css']
})
export class Section03NationalServiceComponent implements OnInit {
  isSingaporean: boolean = false;
  isEnlisted: number = 0;
  isExemptedReservist: boolean = false;
  isExemptedService: boolean = false;

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-green',
      dateInputFormat: 'DD MMMM YYYY'
    }
  }

  ngOnInit(): void {
  }

}
