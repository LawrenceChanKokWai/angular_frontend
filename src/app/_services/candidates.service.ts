import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CandidatesService {

  //Post candidate route
  url = "https://legolas2-api-prod.azurewebsites.net/api/Candidate"

  constructor(private http: HttpClient) { }

  saveCandidate(candidateData:any){
    return this.http.post(this.url, candidateData);
  }
}
