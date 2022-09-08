import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section06-employment-history',
  templateUrl: './section06-employment-history.component.html',
  styleUrls: ['./section06-employment-history.component.css']
})
export class Section06EmploymentHistoryComponent implements OnInit {
  workExperience: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
