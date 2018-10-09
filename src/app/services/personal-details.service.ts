
import { HttpClient } from "@angular/common/http";

export class PersonalDetails{
	api_url = 'localhost:3000';
	constructor(private httpclient : HttpClient){

	}
	private PersonalDetails =[{
		  name:"Puja",
		  email:"pujakeshri@gmail.com",
		  contact:"1423623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:"active"
	  },{
		  name:"Ravi",
		  email:"ravikeshri@gmail.com",
		  contact:"2323623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:"inactive"
	  },{
		  name:"Nidhi",
		  email:"Nidhikeshri@gmail.com",
		  contact:"4523623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:"active"
	  }];
	
	getPersonalDetails(){
		// this.httpclient.get(`${this.api_url}/enquires?pageNo=1&size=10`);
			return this.PersonalDetails;
	}
}