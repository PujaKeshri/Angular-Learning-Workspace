import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {EnquiryComponent} from './enquiry/enquiry.component';
import {PersonalDetails} from './services/personal-details.service';
import {Sorting} from './services/sorting.service';
import {ValidationMessageService} from './services/validation-message.service';
import {SortByDirective} from './directives/sort-by.directive';
import { AppComponent } from './app.component';
import { LeftMenu } from './left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { ControlMessageComponent } from './control-message/control-message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleLoginComponent } from './google-login/google-login.component';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1043517178549-i2glm3h1b3ak5s0231r2rdble3jol4qd.apps.googleusercontent.com',googleLoginOptions)
  }/*,
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
  }*/
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LeftMenu,
    EnquiryComponent,
    SortByDirective,
    ControlMessageComponent,
    DashboardComponent,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [PersonalDetails,Sorting,ValidationMessageService,{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
