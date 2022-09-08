import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cohort } from '../_models/cohort';

@Injectable({
  providedIn: 'root'
})
export class CohortsService {
  localUrl = environment.localUrl;
  cohorts: Cohort[] = [];

  constructor(private http: HttpClient) { }

  getCohorts() {
    return this.http.get<Cohort[]>(this.localUrl + 'cohort').pipe(
      map(response => {
        this.cohorts = response;
        return response;
      })
    )
  }
}
