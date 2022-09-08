import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidatesService} from "../../_services/candidates.service";

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  numPattern:string = '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
  existCandidateMsg:string = 'This Candidate has been registered and added. Please check on your entry.'

  /*--Using FormGroup--*/
  addCandidateForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    mobileNumber: new FormControl(null, [Validators.required, Validators.pattern(this.numPattern)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(null, Validators.required),
  })

  constructor(private candidateService:CandidatesService) { }

  ngOnInit(): void {
  }

  handleAddCandidate(){

    //For persisting into Database & API
    this.candidateService.saveCandidate(this.addCandidateForm.value)
      .subscribe({next:(response => {
          console.log(response)
        })
      })


    /* For Testing Purposes */
    // console.log(this.addCandidateForm.value)
    // console.log(this.addCandidateForm.controls['email'].value)
  }
}
