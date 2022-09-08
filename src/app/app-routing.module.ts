import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormBankingFinishComponent } from './candidate/candidate-form-banking/candidate-form-banking-finish/candidate-form-banking-finish.component';
import { CandidateFormBankingSection01Component } from './candidate/candidate-form-banking/candidate-form-banking-section01/candidate-form-banking-section01.component';
import { CandidateFormBankingStartComponent } from './candidate/candidate-form-banking/candidate-form-banking-start/candidate-form-banking-start.component';
import { CandidateFormOnboardingComponent } from './candidate/candidate-form-onboarding/candidate-form-onboarding.component';
import { OnboardingFinishComponent } from './candidate/candidate-form-onboarding/onboarding-finish/onboarding-finish.component';
import { Section01PersonalParticularComponent } from './candidate/candidate-form-onboarding/section01-personal-particular/section01-personal-particular.component';
import { Section02FamilyParticularComponent } from './candidate/candidate-form-onboarding/section02-family-particular/section02-family-particular.component';
import { Section03NationalServiceComponent } from './candidate/candidate-form-onboarding/section03-national-service/section03-national-service.component';
import { Section04EducationComponent } from './candidate/candidate-form-onboarding/section04-education/section04-education.component';
import { Section05LanguageProficiencyComponent } from './candidate/candidate-form-onboarding/section05-language-proficiency/section05-language-proficiency.component';
import { Section06EmploymentHistoryComponent } from './candidate/candidate-form-onboarding/section06-employment-history/section06-employment-history.component';
import { Section07ResumeComponent } from './candidate/candidate-form-onboarding/section07-resume/section07-resume.component';
import { Section08OtherInformationComponent } from './candidate/candidate-form-onboarding/section08-other-information/section08-other-information.component';
import { Section09EmergencyContactComponent } from './candidate/candidate-form-onboarding/section09-emergency-contact/section09-emergency-contact.component';
import { Section10StartDateComponent } from './candidate/candidate-form-onboarding/section10-start-date/section10-start-date.component';
import { Section11DeclarationComponent } from './candidate/candidate-form-onboarding/section11-declaration/section11-declaration.component';
import { CandidateFormVaccineFinishComponent } from './candidate/candidate-form-vaccine/candidate-form-vaccine-finish/candidate-form-vaccine-finish.component';
import { CandidateFormVaccineSection01Component } from './candidate/candidate-form-vaccine/candidate-form-vaccine-section01/candidate-form-vaccine-section01.component';
import { CandidateFormVaccineStartComponent } from './candidate/candidate-form-vaccine/candidate-form-vaccine-start/candidate-form-vaccine-start.component';
import { CohortComponent } from './cohort/cohort.component';
import { EditCohortHropsComponent } from './cohort/edit-cohort-hrops/edit-cohort-hrops.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AddCandidateComponent} from "./add/add-candidate/add-candidate.component";
import {HomeHropsComponent} from "./home/home-hrops/home-hrops.component";
import {HomeAcctmgrComponent} from "./home/home-acctmgr/home-acctmgr.component";
import {HomeUstComponent} from "./home/home-ust/home-ust.component";
import {HomeFinanceComponent} from "./home/home-finance/home-finance.component";
import {AuthGuard} from "./_services/auth-guard.service";
import {HrAuthGuard} from "./_services/hr-auth-guard.service";
import {NoAccessComponent} from "./no-access/no-access.component";
import {AcctmgrAuthGuard} from "./_services/acctmgr-auth-guard.service";
import {UstAuthGuard} from "./_services/ust-auth-guard.service";
import {FinanceAuthGuard} from "./_services/finance-auth-guard.service";


const routes: Routes = [
  { path: '', component: LoginComponent },

  // For usage after login system works
  { path: 'dashboard', component: HomeComponent, },

  /* Indiv routes for loggin in dashboards */
  { path: 'hr-dashboard', component: HomeHropsComponent, canActivate: [AuthGuard, HrAuthGuard] },
  { path: 'acctmgr-dashboard', component: HomeAcctmgrComponent, canActivate: [AuthGuard, AcctmgrAuthGuard] },
  { path: 'finance-dashboard', component: HomeFinanceComponent, canActivate: [AuthGuard, FinanceAuthGuard] },
  { path: 'ust-dashboard', component: HomeUstComponent, canActivate: [AuthGuard, UstAuthGuard] },
  /*----------------------------------------------------------*/

  { path: 'profile', component: CohortComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditCohortHropsComponent, canActivate: [AuthGuard] },
  { path: 'add-candidate', component: AddCandidateComponent, canActivate: [AuthGuard] },
  { path: 'onboarding-start', component: CandidateFormOnboardingComponent, canActivate: [AuthGuard]},
  { path: 'section01', component: Section01PersonalParticularComponent, canActivate: [AuthGuard] },
  { path: 'section02', component: Section02FamilyParticularComponent, canActivate: [AuthGuard] },
  { path: 'section03', component: Section03NationalServiceComponent, canActivate: [AuthGuard] },
  { path: 'section04', component: Section04EducationComponent, canActivate: [AuthGuard] },
  { path: 'section05', component: Section05LanguageProficiencyComponent, canActivate: [AuthGuard] },
  { path: 'section06', component: Section06EmploymentHistoryComponent, canActivate: [AuthGuard] },
  { path: 'section07', component: Section07ResumeComponent, canActivate: [AuthGuard] },
  { path: 'section08', component: Section08OtherInformationComponent, canActivate: [AuthGuard] },
  { path: 'section09', component: Section09EmergencyContactComponent, canActivate: [AuthGuard] },
  { path: 'section10', component: Section10StartDateComponent, canActivate: [AuthGuard] },
  { path: 'section11', component: Section11DeclarationComponent, canActivate: [AuthGuard] },
  { path: 'onboarding-finish', component: OnboardingFinishComponent, canActivate: [AuthGuard] },
  { path: 'bank-form-01', component: CandidateFormBankingStartComponent, canActivate: [AuthGuard] },
  { path: 'bank-form-02', component: CandidateFormBankingSection01Component, canActivate: [AuthGuard] },
  { path: 'bank-form-03', component: CandidateFormBankingFinishComponent, canActivate: [AuthGuard] },
  { path: 'vax-form-01', component: CandidateFormVaccineStartComponent, canActivate: [AuthGuard] },
  { path: 'vax-form-02', component: CandidateFormVaccineSection01Component, canActivate: [AuthGuard] },
  { path: 'vax-form-03', component: CandidateFormVaccineFinishComponent, canActivate: [AuthGuard] },
  { path: 'no-access', component: NoAccessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
