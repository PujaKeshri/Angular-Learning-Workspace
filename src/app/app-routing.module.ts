import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Enquiry} from './enquiry/enquiry.component';
//import {AppComponent} from './app.component';
const route : Routes =[
    { path:'enquiry',	component:Enquiry}
];

@NgModule({
	imports:[RouterModule.forRoot(route)],
	exports:[RouterModule]
})

export class AppRoutingModule{
	
}