import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
