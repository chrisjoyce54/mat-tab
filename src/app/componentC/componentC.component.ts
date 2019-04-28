import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentC',
  templateUrl: './componentC.component.html',
  styleUrls: ['./componentC.component.css']
})
export class ComponentCComponent implements OnInit {
  @Input() signupForm;

  constructor() { }

  ngOnInit() {
  }

}
