import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-vax',
  templateUrl: './side-nav-vax.component.html',
  styleUrls: ['./side-nav-vax.component.css']
})
export class SideNavVaxComponent implements OnInit {
  url: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
