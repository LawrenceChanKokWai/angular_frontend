import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-candidate-form-banking-section01',
  templateUrl: './candidate-form-banking-section01.component.html',
  styleUrls: ['./candidate-form-banking-section01.component.css']
})
export class CandidateFormBankingSection01Component implements OnInit {

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
