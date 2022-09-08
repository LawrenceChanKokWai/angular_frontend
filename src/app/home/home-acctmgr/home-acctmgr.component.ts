/**
 * This Class will holds all information on Acctmgr.
 * Updated on: 27 July 2022
 * By: Lawrence Chan
 */
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-acctmgr',
  templateUrl: './home-acctmgr.component.html',
  styleUrls: ['./home-acctmgr.component.css']
})
export class HomeAcctmgrComponent implements OnInit {

  cohorts: any;

  /**
   * Updated: 27 July 2022
   * By: Lawrence Chan
   * User Defined Constructor: As well using for calling methods
   * Injected: HttpClient (27 July 2022)
   * @param http from httpClient. Used for making api calls.
   */
  constructor(private http:HttpClient) {
    this.getAllAcctMgr();
  }

  ngOnInit(): void {
  }

  /**
   * Function used in GET all acctMgr from endpoint url.
   * Current Status: Blocked By CORS policy from backend.
   * NOTE:
   * TODO: Requires to change the url of getting all acctmgr when api is ready for consuming.
   */
  getAllAcctMgr(){
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
