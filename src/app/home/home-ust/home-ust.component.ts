import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-ust',
  templateUrl: './home-ust.component.html',
  styleUrls: ['./home-ust.component.css']
})
export class HomeUstComponent implements OnInit {

  cohorts: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUstManager();
  }

  /**
   * Function used in GET all UST from endpoint url.
   * Current Status: None
   * NOTE:
   * TODO: Requires to change the url of getting all ust api data
   */
  getAllUstManager(){
    this.http.get("https://legolas2-api-prod.azurewebsites.net/api/Cohort")
      .subscribe({
        next: (response) =>{
          this.cohorts=response;
          console.log(response)
        },
        error: (error) => {
          console.log(error)
        },
        complete:() => {
          console.log("Task is done")
        }
      })
  }
}
