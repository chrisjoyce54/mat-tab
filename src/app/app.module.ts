import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ComponentAComponent } from './componentA/componentA.component';
import { ComponentBComponent } from './componentB/componentB.component';
import { ComponentCComponent } from './componentC/componentC.component';

@NgModule({
   declarations: [
      AppComponent,
      ComponentAComponent,
      ComponentBComponent,
      ComponentCComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
