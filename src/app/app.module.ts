import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {Enquiry} from './enquiry/enquiry.component';
import {PersonalDetails} from './services/personal-details.service';
import {Sorting} from './services/sorting.service';
import {SortByDirective} from './directives/sort-by.directive';
import { AppComponent } from './app.component';
import { LeftMenu } from './left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenu,
    Enquiry,
    SortByDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonalDetails,Sorting],
  bootstrap: [AppComponent]
})
export class AppModule { }
