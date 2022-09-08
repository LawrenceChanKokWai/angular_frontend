import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-section01-personal-particular',
  templateUrl: './section01-personal-particular.component.html',
  styleUrls: ['./section01-personal-particular.component.css']
})
export class Section01PersonalParticularComponent implements OnInit {
  showOtherDriverLicense = false;
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
