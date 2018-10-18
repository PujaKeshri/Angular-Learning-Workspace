import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {EnquiryComponent} from './enquiry/enquiry.component';
import {PersonalDetails} from './services/personal-details.service';
import {Sorting} from './services/sorting.service';
import {SortByDirective} from './directives/sort-by.directive';
import { AppComponent } from './app.component';
import { LeftMenu } from './left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftMenu,
    EnquiryComponent,
    SortByDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonalDetails,Sorting],
  bootstrap: [AppComponent]
})
export class AppModule { }
