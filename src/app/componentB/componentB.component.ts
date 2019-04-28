import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentB',
  templateUrl: './componentB.component.html',
  styleUrls: ['./componentB.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() signupForm;

  constructor() { }

  ngOnInit() {
  }

}
