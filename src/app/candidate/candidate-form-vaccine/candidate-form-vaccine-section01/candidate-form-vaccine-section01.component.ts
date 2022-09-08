import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-candidate-form-vaccine-section01',
  templateUrl: './candidate-form-vaccine-section01.component.html',
  styleUrls: ['./candidate-form-vaccine-section01.component.css']
})
export class CandidateFormVaccineSection01Component implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;

  addVaccineDeclaration = new FormGroup({
    date: new FormControl(null, Validators.required),
    travelPlan: new FormControl(null, Validators.required),
    fromTo: new FormControl(null, Validators.required),
    travelReason: new FormControl(null, Validators.required),
    intendToGo: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
    visitedCountry: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
  })

  constructor() {
    this.bsConfig = {
      containerClass: 'theme-green',
      dateInputFormat: 'DD MMMM YYYY'
    }
  }

  ngOnInit(): void {
  }

  handleAddVaccineDeclaration(){

    //For persisting into Database & API


    /* For Testing Purposes */
    console.log(this.addVaccineDeclaration.value)
    console.log(this.addVaccineDeclaration.controls['date'].value)
  }

}
