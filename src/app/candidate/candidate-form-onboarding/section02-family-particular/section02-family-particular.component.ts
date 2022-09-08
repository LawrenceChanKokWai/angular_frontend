import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section02-family-particular',
  templateUrl: './section02-family-particular.component.html',
  styleUrls: ['./section02-family-particular.component.css']
})
export class Section02FamilyParticularComponent implements OnInit {
  hasSiblings: boolean = false;
  isMarried: boolean = false;
  hasChildren: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
