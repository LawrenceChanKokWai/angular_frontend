import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeAcctmgrComponent } from './home/home-acctmgr/home-acctmgr.component';
import { HomeHropsComponent } from './home/home-hrops/home-hrops.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CohortHropsComponent } from './cohort/cohort-hrops/cohort-hrops.component';
import { EditCohortHropsComponent } from './cohort/edit-cohort-hrops/edit-cohort-hrops.component';
import { CandidateFormOnboardingComponent } from './candidate/candidate-form-onboarding/candidate-form-onboarding.component';
import { HomeComponent } from './home/home.component';
import { CohortComponent } from './cohort/cohort.component';
import { HomeFinanceComponent } from './home/home-finance/home-finance.component';
import { HomeUstComponent } from './home/home-ust/home-ust.component';
import { CohortFinanceComponent } from './cohort/cohort-finance/cohort-finance.component';
import { CohortUstComponent } from './cohort/cohort-ust/cohort-ust.component';
import { CohortAmComponent } from './cohort/cohort-am/cohort-am.component';
import { EditCohortAmComponent } from './cohort/edit-cohort-am/edit-cohort-am.component';
import { EditCohortFinanceComponent } from './cohort/edit-cohort-finance/edit-cohort-finance.component';
import { EditCohortUstComponent } from './cohort/edit-cohort-ust/edit-cohort-ust.component';
import { CandidateComponent } from './home/candidate/candidate.component';
import { AddCohortComponent } from './add/add-cohort/add-cohort.component';
import { AddCandidateComponent } from './add/add-candidate/add-candidate.component';
import { Section01PersonalParticularComponent } from './candidate/candidate-form-onboarding/section01-personal-particular/section01-personal-particular.component';
import { Section02FamilyParticularComponent } from './candidate/candidate-form-onboarding/section02-family-particular/section02-family-particular.component';
import { SideNavComponent } from './candidate/candidate-form-onboarding/side-nav/side-nav.component';
import { Section03NationalServiceComponent } from './candidate/candidate-form-onboarding/section03-national-service/section03-national-service.component';
import { Section04EducationComponent } from './candidate/candidate-form-onboarding/section04-education/section04-education.component';
import { Section05LanguageProficiencyComponent } from './candidate/candidate-form-onboarding/section05-language-proficiency/section05-language-proficiency.component';
import { Section06EmploymentHistoryComponent } from './candidate/candidate-form-onboarding/section06-employment-history/section06-employment-history.component';
import { Section07ResumeComponent } from './candidate/candidate-form-onboarding/section07-resume/section07-resume.component';
import { Section08OtherInformationComponent } from './candidate/candidate-form-onboarding/section08-other-information/section08-other-information.component';
import { Section09EmergencyContactComponent } from './candidate/candidate-form-onboarding/section09-emergency-contact/section09-emergency-contact.component';
import { Section10StartDateComponent } from './candidate/candidate-form-onboarding/section10-start-date/section10-start-date.component';
import { Section11DeclarationComponent } from './candidate/candidate-form-onboarding/section11-declaration/section11-declaration.component';
import { OnboardingFinishComponent } from './candidate/candidate-form-onboarding/onboarding-finish/onboarding-finish.component';
import { OnboardingHeaderComponent } from './candidate/candidate-form-onboarding/onboarding-header/onboarding-header.component';
import { CandidateFormBankingStartComponent } from './candidate/candidate-form-banking/candidate-form-banking-start/candidate-form-banking-start.component';
import { CandidateFormBankingFinishComponent } from './candidate/candidate-form-banking/candidate-form-banking-finish/candidate-form-banking-finish.component';
import { CandidateFormBankingSection01Component } from './candidate/candidate-form-banking/candidate-form-banking-section01/candidate-form-banking-section01.component';
import { CandidateFormVaccineStartComponent } from './candidate/candidate-form-vaccine/candidate-form-vaccine-start/candidate-form-vaccine-start.component';
import { CandidateFormVaccineFinishComponent } from './candidate/candidate-form-vaccine/candidate-form-vaccine-finish/candidate-form-vaccine-finish.component';
import { CandidateFormVaccineSection01Component } from './candidate/candidate-form-vaccine/candidate-form-vaccine-section01/candidate-form-vaccine-section01.component';
import { SideNavVaxComponent } from './candidate/candidate-form-vaccine/side-nav-vax/side-nav-vax.component';
import { SideNavBankComponent } from './candidate/candidate-form-banking/side-nav-bank/side-nav-bank.component';
import {AccountService} from "./_services/account.service";
import {AuthGuard} from "./_services/auth-guard.service";
import {HrAuthGuard} from "./_services/hr-auth-guard.service";
import { NoAccessComponent } from './no-access/no-access.component';
import {AcctmgrAuthGuard} from "./_services/acctmgr-auth-guard.service";
import {UstAuthGuard} from "./_services/ust-auth-guard.service";
import {FinanceAuthGuard} from "./_services/finance-auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAcctmgrComponent,
    HomeHropsComponent,
    NavbarComponent,
    CohortHropsComponent,
    EditCohortHropsComponent,
    CandidateFormOnboardingComponent,
    HomeComponent,
    CohortComponent,
    HomeFinanceComponent,
    HomeUstComponent,
    CohortFinanceComponent,
    CohortUstComponent,
    CohortAmComponent,
    EditCohortAmComponent,
    EditCohortFinanceComponent,
    EditCohortUstComponent,
    CandidateComponent,
    AddCohortComponent,
    AddCandidateComponent,
    Section01PersonalParticularComponent,
    Section02FamilyParticularComponent,
    SideNavComponent,
    Section03NationalServiceComponent,
    Section04EducationComponent,
    Section05LanguageProficiencyComponent,
    Section06EmploymentHistoryComponent,
    Section07ResumeComponent,
    Section08OtherInformationComponent,
    Section09EmergencyContactComponent,
    Section10StartDateComponent,
    Section11DeclarationComponent,
    OnboardingFinishComponent,
    OnboardingHeaderComponent,
    CandidateFormBankingStartComponent,
    CandidateFormBankingFinishComponent,
    CandidateFormBankingSection01Component,
    CandidateFormVaccineStartComponent,
    CandidateFormVaccineFinishComponent,
    CandidateFormVaccineSection01Component,
    SideNavVaxComponent,
    SideNavBankComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    AccountService,
    AuthGuard,
    HrAuthGuard,
    AcctmgrAuthGuard,
    UstAuthGuard,
    FinanceAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
