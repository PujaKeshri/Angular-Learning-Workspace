import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnquiryComponent} from './enquiry/enquiry.component';
import { LoginComponent } from './login/login.component';
//import {AppComponent} from './app.component';
const route : Routes =[
	{ path:'enquiry',	component:EnquiryComponent},
	{ path:'login',	component:LoginComponent}
];

@NgModule({
	imports:[RouterModule.forRoot(route)],
	exports:[RouterModule]
})

export class AppRoutingModule{
	
}