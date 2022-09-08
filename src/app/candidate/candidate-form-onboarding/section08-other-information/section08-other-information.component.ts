import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section08-other-information',
  templateUrl: './section08-other-information.component.html',
  styleUrls: ['./section08-other-information.component.css']
})
export class Section08OtherInformationComponent implements OnInit {
  isConvicted: boolean = false;
  isDismissed: boolean = false;
  isSuffering: boolean = false;
  isBankrupt: boolean = false;
  hasRelative: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
