import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: any;

  constructor(public accountService: AccountService, private router: Router) {
    this.username = localStorage.getItem('user_name');
  }

  ngOnInit(): void {
    // console.log('navbar init: ');
  }

  logout() {
    //this.accountService.logout();
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
