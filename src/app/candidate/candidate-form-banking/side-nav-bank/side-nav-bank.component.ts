import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bank',
  templateUrl: './side-nav-bank.component.html',
  styleUrls: ['./side-nav-bank.component.css']
})
export class SideNavBankComponent implements OnInit {
  url: any;

  constructor(public router: Router) { 
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        
      }
    })
  }

  ngOnInit(): void {
  }

}
