import { Component, OnInit } from '@angular/core';
import { MatGridTileFooterCssMatStyler } from '@angular/material';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMaterialTabs';
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Chris', [Validators.required]),
        'email': new FormControl('"test@test2.com', [Validators.required, Validators.email], [this.forbiddenEmails])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
      'form3': new FormControl('Test')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
