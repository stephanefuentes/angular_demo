import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TweetComponent } from './tweet/tweet.component';
import { EmployeComponent } from './employe/employe.component';

@NgModule({
  declarations: [
    AppComponent, TweetComponent, EmployeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
