import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnquiryComponent} from './enquiry/enquiry.component';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
//import {AppComponent} from './app.component';
const route : Routes =[
	{ path:'enquiry',	component:EnquiryComponent},
	{ path:'login',	component:LoginComponent},
	{ path:'signup',component:RegistrationComponent},
	{ path : 'socialLogin' , component:GoogleLoginComponent}
];

@NgModule({
	imports:[RouterModule.forRoot(route)],
	exports:[RouterModule]
})

export class AppRoutingModule{
	
}