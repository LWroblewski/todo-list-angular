import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
