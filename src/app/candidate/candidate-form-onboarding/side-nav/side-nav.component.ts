import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  url: any;

  constructor(
    public router: Router
  ) { 
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        // const url = event.urlAfterRedirects;
        // this.url = url;
        // console.log(url);
      }
    })
  }

  ngOnInit(): void {
  }

}
