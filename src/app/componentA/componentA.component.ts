import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentA',
  templateUrl: './componentA.component.html',
  styleUrls: ['./componentA.component.css']
})
export class ComponentAComponent implements OnInit {
  @Input() signupForm;

  constructor() { }

  ngOnInit() {
  }

}
