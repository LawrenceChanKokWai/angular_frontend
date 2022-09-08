import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.css']
})
export class CohortComponent implements OnInit {
  role: any;

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem('user_role');
    // console.log(this.role);
  }

}
