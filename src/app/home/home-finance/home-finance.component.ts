import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-finance',
  templateUrl: './home-finance.component.html',
  styleUrls: ['./home-finance.component.css']
})
export class HomeFinanceComponent implements OnInit {

  cohorts: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    //this.getAllCohorts();
  }

  /**
   * Function used in GET all HTD Cohort from endpoint url.
   * Current Status: None
   * NOTE:
   * TODO: Requires to change the url of getting all ust api data
   */
  // getAllCohorts(){
  //   this.http.get("https://legolas2-api-prod.azurewebsites.net/api/Cohort")
  //     .subscribe({
  //       next: (response) =>{
  //         this.cohorts=response;
  //         console.log(response)
  //       },
  //       error: (error) => {
  //         console.log(error)
  //       },
  //       complete:() => {
  //         console.log("Task is done")
  //       }
  //     })
  // }

}
