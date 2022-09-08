import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-form-onboarding',
  templateUrl: './candidate-form-onboarding.component.html',
  styleUrls: ['./candidate-form-onboarding.component.css']
})
export class CandidateFormOnboardingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
