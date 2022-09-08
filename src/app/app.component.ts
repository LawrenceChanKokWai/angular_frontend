import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geco_onboarding';
  email: any;

  constructor() {}

  ngOnInit(): void {
      // this.setCurrentUser();
  }

  hasCurrentUser() {
    this.email = localStorage.getItem('user_email');
  }
}
