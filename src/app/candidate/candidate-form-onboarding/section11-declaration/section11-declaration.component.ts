import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-section11-declaration',
  templateUrl: './section11-declaration.component.html',
  styleUrls: ['./section11-declaration.component.css']
})
export class Section11DeclarationComponent implements OnInit {

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
